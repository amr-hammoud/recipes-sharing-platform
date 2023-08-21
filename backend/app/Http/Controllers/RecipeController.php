<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->page ? $request->page : 1;

        $recipes = Recipe::with('images','ingredients')
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
        $recipe = Recipe::withCount('likes')->with('user','cuisine','comments','ingredients')->findOrFail($id);

        return response()->json([
            'status' => 'success',
            'data' => $recipe
        ], 200);
    }

}
