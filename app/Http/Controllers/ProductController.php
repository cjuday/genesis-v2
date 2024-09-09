<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Illuminate\Support\Facades\Validator;
//Models
use App\Models\Products;
//Enums
use App\Enums\CategoryEnums;
use App\Enums\ManProductsEnums;
use App\Enums\WomanProductsEnums;
use App\Enums\KidProductsEnums;

class ProductController extends Controller
{
    public function index($category, $selection)
    {
        $categoryEnums = [
            'Men' => CategoryEnums::Men,
            'Women' => CategoryEnums::Women,
            'Kid' => CategoryEnums::Kids,
        ];
        
        $enum = $categoryEnums[$category];

        if($enum==CategoryEnums::Men){
            $subCategoryEnums = [
                'T-shirts' => ManProductsEnums::T_Shirts,
                'Polo' => ManProductsEnums::Polo,
                'Bottom' => ManProductsEnums::Bottom,
                'Shirts' => ManProductsEnums::Shirts,
                'Sweat_Shirts' => ManProductsEnums::Sweat_Shirts,
                'Trousers' => ManProductsEnums::Trousers,
                'Sweaters' => ManProductsEnums::Sweaters,
                'Jacket' => ManProductsEnums::Jacket
            ];
        }else if($enum==CategoryEnums::Women){
            $subCategoryEnums = [
                'Tops' => WomanProductsEnums::Tops,
                'Bottoms' => WomanProductsEnums::Bottoms,
            ];
        }else if($enum==CategoryEnums::Kids){
            $subCategoryEnums = [
                'T&T' => KidProductsEnums::T_Shirts_Tops,
                'S&S' => KidProductsEnums::Sweaters_Sweat_Shirts,
                'Trousers' => KidProductsEnums::Trousers,
                'Jeans' => KidProductsEnums::Jeans,
                'Shorts' => KidProductsEnums::Shorts
            ];
        }
        $subCatenum = $subCategoryEnums[$selection] ?? null;

        if(!$subCatenum) {
            $data = Products::where('group_id', $enum)->orderBy('id','desc')->paginate(20);
        }else{
            $data = Products::where([['group_id',$enum],['subgroup_id',$subCatenum]])->orderBy('id','desc')->paginate(20);
        }
        return Inertia::render('Items', [
            'appUrl' => env('APP_URL'),
            'products' => $data
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'file.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category' => 'required|integer',
            'subCategory' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return redirect()->route('products.index')->with('error', $validator->errors());
        }

        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $path = $file->store('uploads', 'public');
    
                Products::create([
                    'image_url' => 'storage/' . $path,
                    'group_id' => $request->input('category'),
                    'subgroup_id' => $request->input('subCategory'),
                    'created_by' => Auth::id(),
                ]);
            }
        }

        return redirect()->route('products.index')->with('success', 'File uploaded successfully.');
    }

    public function destroy(string $id)
    {
        // Find the product by ID
        $product = Products::findOrFail($id);

        // Delete the product
        $product->delete();

        // Return a success response (Inertia will handle the frontend refresh)
        return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
    }
}
