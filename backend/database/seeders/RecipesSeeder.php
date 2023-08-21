<?php

namespace Database\Seeders;

use App\Models\Recipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecipesSeeder extends Seeder
{
    public function run(): void
    {
        Recipe::factory()->count(50)->create();
    }
}
