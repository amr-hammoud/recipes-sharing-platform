<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function likes(){
        return $this->hasMany(Like::class, 'recipe_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class, 'recipe_id');
    }

    public function images(){
        return $this->hasMany(Image::class, 'recipe_id');
    }

    public function ingredients(){
        return $this->hasMany(IngredientList::class, 'recipe_id');
    }

    public function cuisine(){
        return $this->belongsTo(Cuisine::class, 'cuisine_id');
    }

    public function shoppingList(){
        return $this->belongsToMany(ShoppingList::class, 'recipe_id');
    }

    public function mealPlans(){
        return $this->hasMany(MealPlan::class, 'recipe_id');
    }

}
