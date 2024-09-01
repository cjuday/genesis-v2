<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stichoza\GoogleTranslate\GoogleTranslate;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
        'img', 'title', 'title_2', 'title_3', 'title_4', 'visiblity', 'text_align','color','uploaded_by'
    ];

    public function translateFields($targetLanguage = 'en')
    {
        $targetLanguage = $targetLanguage ?: 'en';
        $tr = new GoogleTranslate();
        $tr->setTarget($targetLanguage); // Set the target language

        // Translate desired fields
        $this->title = $this->translateField($this->title, $tr);
        $this->title_2 = $this->translateField($this->title_2, $tr);
        $this->title_3 = $this->translateField($this->title_3, $tr);
        $this->title_4 = $this->translateField($this->title_4, $tr);

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
