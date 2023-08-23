<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    public function run(): void
    {
        $user = User::create([
            'username' => 'amr_hammoud',
            'first_name' => 'Amr',
            'last_name' => 'Hammoud',
            'email' => 'amrhammoud.dev@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        User::factory()->count(50)->create();
    }
}
