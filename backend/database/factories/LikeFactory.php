<?php

namespace Database\Factories;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Like>
 */
class LikeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $recipe_id = Recipe::inRandomOrder()->first()->id;
        $user_id = User::inRandomOrder()->first()->id;

        return [
            'recipe_id' => $recipe_id,
            'user_id' => $user_id,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
