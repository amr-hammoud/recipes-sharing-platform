<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        $this->call([
            IngredientsTableSeeder::class,
            CuisinesTableSeeder::class,
            MealTypesTableSeeder::class,
            UsersTableSeeder::class,
            RecipesSeeder::class,
            IngredientListsTableSeeder::class,
            ImagesSeeder::class,
            LikesTableSeeder::class,
            CommentsTableSeeder::class
        ]);

    }
}
