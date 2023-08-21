<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientList extends Model
{
    use HasFactory;

    protected $hidden = ['ingredient','id','recipe_id','created_at','updated_at'];

    protected $appends = ['ingredient_name'];

    protected $fillable = [
        'recipe_id',
        'ingredient_id',
        'description'
    ];

    public function recipe() {
        return $this->belongsTo(Recipe::class, 'recipe_id');
    }

    public function ingredient() {
        return $this->belongsTo(Ingredient::class, 'ingredient_id');
    }

    public function getIngredientNameAttribute()
    {
        return $this->ingredient->name;
    }
    
}
