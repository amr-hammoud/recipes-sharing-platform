<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealType extends Model
{
    use HasFactory;

    public function mealPlans() {
        return $this->hasMany(MealPlan::class, 'meal_type_id');
    }
}
