<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    use HasFactory;

    protected $appends = ['encoded_image'];

    protected $fillable = [
        'recipe_id',
        'name',
    ];

    public function recipe() {
        return $this->belongsTo(Recipe::class, 'recipe_id');
    }

    public function getEncodedImageAttribute()
    {
        $image_path = 'recipes/' . $this->recipe_id . '/' . $this->name;

        if($image_path){
            $image_content = Storage::disk('public')->get($image_path);
            return base64_encode($image_content);
        }

        return null;
    }

}
