<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealTypesTableSeeder extends Seeder
{

    public function run(): void
    {
        $meal_types = [
            ['name' => "Breakfast"],
            ['name' => "Lunch"],
            ['name' => "Snack"],
            ['name' => "Dinner"],
        ];

        DB::table('meal_types')->insert($meal_types);
    }
}
