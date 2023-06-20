<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Category;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'title'           => 'Art',
                'slug'            => 'art',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s'),
            ],
            [
                'title'           => 'Food',
                'slug'            => 'food',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s'),
            ],
            [
                'title'           => 'Music',
                'slug'            => 'music',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s'),
            ],
            [
                'title'           => 'Science & Technology',
                'slug'            => 'science-technology',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s'),
            ],
            [
                'title'           => 'Travel',
                'slug'            => 'travel',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s'),
            ],
            [
                'title'           => 'Wild Life',
                'slug'            => 'wild-life',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s'),
            ],
        ];

        Category::insert($categories);
    }
}
