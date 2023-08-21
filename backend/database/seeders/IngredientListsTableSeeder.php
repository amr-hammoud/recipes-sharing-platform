<?php

namespace Database\Seeders;

use App\Models\IngredientList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IngredientListsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IngredientList::factory()->count(300)->create();
    }
}
