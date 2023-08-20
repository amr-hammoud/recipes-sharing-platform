<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlan extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function recipe(){
        return $this->belongsTo(Recipe::class, 'recipe_id');
    }

    public function mealType(){
        return $this->belongsTo(MealType::class, 'meal_type_id');
    }
}
