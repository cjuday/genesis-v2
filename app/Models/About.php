<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stichoza\GoogleTranslate\GoogleTranslate;

class About extends Model
{
    use HasFactory;

    protected $fillable = [
    	'title', 'details', 'img1', 'img2', 'updated_by'
    ];

    public function translateFields($targetLanguage = 'en')
    {
        $targetLanguage = $targetLanguage ?: 'en';
        $tr = new GoogleTranslate();
        $tr->setTarget($targetLanguage); // Set the target language

        // Translate desired fields
        $this->title = $this->translateField($this->title, $tr);
        $this->details = $this->translateField($this->details, $tr);

        return $this;
    }

    private function translateField($field, GoogleTranslate $translator)
    {
        if ($field !== null) {
            return $translator->translate($field);
        }

        // Return the field as is if it's null
        return $field;
    }
}
