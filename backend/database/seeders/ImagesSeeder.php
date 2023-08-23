<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Recipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $recipes = Recipe::all();

        foreach($recipes as $recipe){
            $recipe_id = $recipe->id;

            $initial_image_path = 'recipes/' . rand(1,12) . '.jpg';
            $image = Storage::get($initial_image_path);

            $image_path = 'recipes/' . $recipe_id . '/';
            $image_name = time() . Str::random(5) . '.jpg';
            Storage::disk('public')->put($image_path . $image_name, $image);

            $image = Image::create([
                'recipe_id' => $recipe_id,
                'name' => $image_name,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
