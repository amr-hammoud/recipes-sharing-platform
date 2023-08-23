<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $hidden = ['user','cuisine', 'cuisine_id'];
    
    protected $appends = ['cuisine_name','user_username','user_full_name', 'cover_photo'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function likes()
    {
        return $this->hasMany(Like::class, 'recipe_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'recipe_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class, 'recipe_id');
    }

    public function ingredients()
    {
        return $this->hasMany(IngredientList::class, 'recipe_id');
    }

    public function cuisine()
    {
        return $this->belongsTo(Cuisine::class, 'cuisine_id');
    }

    public function shoppingList()
    {
        return $this->belongsToMany(ShoppingList::class, 'recipe_id');
    }

    public function mealPlans()
    {
        return $this->hasMany(MealPlan::class, 'recipe_id');
    }

    public function getCuisineNameAttribute()
    {
        return $this->cuisine->name;
    }

    public function getUserUsernameAttribute()
    {
        return $this->user->username;
    }

    public function getUserFullnameAttribute()
    {
        return $this->user->full_name;
    }

    public function getCoverPhotoAttribute()
    {
        $cover_image = $this->images[0];
        
        if ($cover_image) {
            return $cover_image->encoded_image;
        }
        
        return null;
    }
}
