<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
//Models
use App\Models\Products;
//Enums
use App\Enums\CategoryEnums;
use App\Enums\ManProductsEnums;
use App\Enums\WomanProductsEnums;
use App\Enums\KidProductsEnums;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
