<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SubChaptersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createSubChapters();
    }

    public function createSubChapters()
    {
        $faker = Faker::create();
        foreach (range(1, 7) as $index_parent) {
            foreach (range(1,2) as $index) {
                DB::table('sub_chapters')->insert([
                    'title' => 'Sub Bab ' . $index_parent . '.' . $index,
                    'slug' => str_slug('Sub Bab ' . $index_parent . '.' . $index, '-'),
                    'chapter_id' => $index_parent+1,
                    'created_at' => $faker->dateTimeBetween($startDate = 'now', $endDate = 'now'),
                ]);
            }
        }
    }
}
