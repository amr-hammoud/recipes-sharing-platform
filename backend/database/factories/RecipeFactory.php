<?php

namespace Database\Factories;

use App\Models\Cuisine;
use App\Models\Ingredient;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $user_id = User::inRandomOrder()->first()->id;
        $cuisine_id = Cuisine::inRandomOrder()->first()->id;
        $name = Ingredient::inRandomOrder()->first()->name . ' ' . Ingredient::inRandomOrder()->first()->name . ' ' . Ingredient::inRandomOrder()->first()->name;

        return [
            'user_id' => $user_id,
            'cuisine_id' => $cuisine_id,
            'name' => $name,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
