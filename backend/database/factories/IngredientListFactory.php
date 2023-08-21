<?php

namespace Database\Factories;

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class IngredientListFactory extends Factory
{
    public function definition(): array
    {

        $ingredient_id = Ingredient::inRandomOrder()->first()->id;
        $recipe_id = Recipe::inRandomOrder()->first()->id;

        return [
            'recipe_id' => $recipe_id,
            'ingredient_id' => $ingredient_id,
            'description' => $this->faker->words(10, true),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
