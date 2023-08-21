<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InteractionController extends Controller
{
    public function like(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'recipe_id' => 'required|numeric|exists:recipes,id'
        ]);

        $like = new Like();
        $like->recipe_id = $request->recipe_id;
        $like->user_id = $user->id;
        $like->save();


        return response()->json([
            'status' => 'success',
            'message' => 'Recipe Liked Successfully'
        ], 200);
    }
}
