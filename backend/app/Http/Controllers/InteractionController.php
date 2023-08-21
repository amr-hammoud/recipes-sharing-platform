<?php

namespace App\Http\Controllers;

use App\Models\Comment;
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

    public function unlike(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'recipe_id' => 'required|numeric|exists:recipes,id'
        ]);

        $like = Like::where('recipe_id',$request->recipe_id)->where('user_id',$user->id)->first();
        $like->delete();


        return response()->json([
            'status' => 'success',
            'message' => 'Recipe unLiked Successfully'
        ], 200);
    }

    public function comment(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'recipe_id' => 'required|numeric|exists:recipes,id',
            'content' => 'required|string'
        ]);

        $comment = new Comment();
        $comment->recipe_id = $request->recipe_id;
        $comment->user_id = $user->id;
        $comment->content = $request->content;
        $comment->save();


        return response()->json([
            'status' => 'success',
            'message' => 'Comment Added Successfully'
        ], 200);
    }
}
