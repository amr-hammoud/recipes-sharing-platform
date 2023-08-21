<?php

namespace Database\Factories;

use App\Models\Cuisine;
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

        return [
            'user_id' => $user_id,
            'cuisine_id' => $cuisine_id,
            'name' => $this->faker->words(3, true),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
