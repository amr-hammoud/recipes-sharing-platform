<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Ingredient;
use App\Models\IngredientList;
use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RecipeController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->page ? $request->page : 1;

        $recipes = Recipe::with('images', 'ingredients')
            ->addSelect(['user_username' => User::select('username')
                ->whereColumn('users.id', 'recipes.user_id')
                ->limit(1)])
            ->addSelect(['user_full_name' => User::selectRaw("CONCAT(first_name, ' ', last_name) as full_name")
                ->whereColumn('users.id', 'recipes.user_id')
                ->limit(1)])
            ->paginate(10, ['*'], 'page', $page);

        return response()->json([
            'status' => 'success',
            'data' => $recipes->items()
        ], 200);
    }

    public function recipe($id)
    {
        $recipe = Recipe::withCount('likes')->with('user', 'cuisine', 'comments', 'ingredients')->findOrFail($id);

        return response()->json([
            'status' => 'success',
            'data' => $recipe
        ], 200);
    }


    public function createRecipe(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
            'cuisine_id' => 'required|numeric|exists:cuisines,id',
            'images' => 'required|array|min:1',
            'images.*' => 'required|string',
            'ingredients' => 'required|array',
        ]);

        $recipe = new Recipe();
        $recipe->name = $request->name;
        $recipe->user_id = $user->id;
        $recipe->cuisine_id = $request->cuisine_id;
        $recipe->save();
        $recipe_id = $recipe->id;

        $ingredients = $request->ingredients;

        foreach ($ingredients as $ingredient) {
            $ingredient = IngredientList::create(
                [
                    'recipe_id' => $recipe_id,
                    'ingredient_id' => $ingredient['id'],
                    'description' => $ingredient['description']
                ]
            );
        }

        $images = $request->images;

        foreach ($images as $image) {
            $base64_image_array = explode(',', $image);
            $extension = explode(';', explode('/', $base64_image_array[0])[1])[0];
            $image_data = base64_decode($base64_image_array[1]);
            $image_name = time() . Str::random(5) . '.' . $extension;
            $image_path = 'recipes/' . $recipe_id . '/';

            Storage::disk('public')->put($image_path . $image_name, $image_data);
        }

        return response()->json(['message' => 'Recipe created successfully']);
    }
}
