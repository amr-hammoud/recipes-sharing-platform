<?php

namespace Database\Seeders;

use App\Models\Like;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikesTableSeeder extends Seeder
{
    public function run(): void
    {
        Like::factory()->count(300)->create();
    }
}
