<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CuisinesTableSeeder extends Seeder
{
    public function run(): void
    {
        $cuisines = [
            ['name' => 'American'],
            ['name' => 'Angolan'],
            ['name' => 'Arab'],
            ['name' => 'Argentine'],
            ['name' => 'Australian'],
            ['name' => 'Austrian'],
            ['name' => 'Belgian'],
            ['name' => 'Bosnian'],
            ['name' => 'Brazilian'],
            ['name' => 'Cambodian'],
            ['name' => 'Canadian'],
            ['name' => 'Chilean'],
            ['name' => 'Chinese'],
            ['name' => 'Colombian'],
            ['name' => 'Congolese'],
            ['name' => 'Croatian'],
            ['name' => 'Czech'],
            ['name' => 'Dutch'],
            ['name' => 'Egyptian'],
            ['name' => 'Ethiopian'],
            ['name' => 'Filipino'],
            ['name' => 'Finnish'],
            ['name' => 'French'],
            ['name' => 'German'],
            ['name' => 'Greek'],
            ['name' => 'Hungarian'],
            ['name' => 'Indian'],
            ['name' => 'Indonesian'],
            ['name' => 'Irish'],
            ['name' => 'Italian'],
            ['name' => 'Jamaican'],
            ['name' => 'Japanese'],
            ['name' => 'Kazakh'],
            ['name' => 'Kenyan'],
            ['name' => 'Korean'],
            ['name' => 'Malagasy'],
            ['name' => 'Malaysian'],
            ['name' => 'Mexican'],
            ['name' => 'Mongolian'],
            ['name' => 'Nigerian'],
            ['name' => 'Norwegian'],
            ['name' => 'Pacific'],
            ['name' => 'Pakistani'],
            ['name' => 'Peruvian'],
            ['name' => 'Polish'],
            ['name' => 'Portuguese'],
            ['name' => 'Russian'],
            ['name' => 'Serbian'],
            ['name' => 'Singaporean'],
            ['name' => 'Slovak'],
            ['name' => 'Slovenian'],
            ['name' => 'South'],
            ['name' => 'Spanish'],
            ['name' => 'Swedish'],
            ['name' => 'Tanzanian'],
            ['name' => 'Thai'],
            ['name' => 'Turkish'],
            ['name' => 'Ukrainian'],
            ['name' => 'Uruguayan'],
            ['name' => 'Venezuelan'],
            ['name' => 'Vietnamese'],
        ];

        DB::table('cuisines')->insert($cuisines);
    }
}
