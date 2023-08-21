<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\InteractionController;
use App\Http\Controllers\RecipeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["middleware" => "auth:api"], function(){
    Route::group(["prefix" => "user"], function(){
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]);
    });
    Route::group(["prefix" => "recipe"], function(){
        Route::post("/", [RecipeController::class, "index"]);
        Route::get("{id}", [RecipeController::class, "recipe"]);
        Route::post("create", [RecipeController::class, "createRecipe"]);
        Route::post("like", [InteractionController::class, "like"]);
        Route::post("unlike", [InteractionController::class, "unlike"]);
        Route::post("comment", [InteractionController::class, "comment"]);
    });
});

Route::group(["prefix" => "guest"], function(){
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
});