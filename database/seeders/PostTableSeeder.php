<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Post;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                'title'            => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'slug'             => 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit',
                'body'             => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis enim rem a cum unde, labore iste quas quibusdam reprehenderit natus. Eligendi perspiciatis non dignissimos explicabo ipsum culpa voluptates. Quasi.',
                'featured'         => '1',
                'category_id'      => 1,
                'created_by'       => 2,
                'updated_by'       => 2,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
            ],
            [
                'title'            => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'slug'             => 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-1',
                'body'             => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis enim rem a cum unde, labore iste quas quibusdam reprehenderit natus. Eligendi perspiciatis non dignissimos explicabo ipsum culpa voluptates. Quasi.',
                'featured'         => '0',
                'category_id'      => 2,
                'created_by'       => 2,
                'updated_by'       => 2,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
            ],
            [
                'title'            => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'slug'             => 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-2',
                'body'             => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis enim rem a cum unde, labore iste quas quibusdam reprehenderit natus. Eligendi perspiciatis non dignissimos explicabo ipsum culpa voluptates. Quasi.',
                'featured'         => '0',
                'category_id'      => 3,
                'created_by'       => 2,
                'updated_by'       => 2,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
            ],
            [
                'title'            => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'slug'             => 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-3',
                'body'             => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis enim rem a cum unde, labore iste quas quibusdam reprehenderit natus. Eligendi perspiciatis non dignissimos explicabo ipsum culpa voluptates. Quasi.',
                'featured'         => '0',
                'category_id'      => 4,
                'created_by'       => 2,
                'updated_by'       => 2,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
            ],
            [
                'title'            => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'slug'             => 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-4',
                'body'             => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis enim rem a cum unde, labore iste quas quibusdam reprehenderit natus. Eligendi perspiciatis non dignissimos explicabo ipsum culpa voluptates. Quasi.',
                'featured'         => '0',
                'category_id'      => 5,
                'created_by'       => 2,
                'updated_by'       => 2,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
            ],
            [
                'title'            => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'slug'             => 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-5',
                'body'             => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis enim rem a cum unde, labore iste quas quibusdam reprehenderit natus. Eligendi perspiciatis non dignissimos explicabo ipsum culpa voluptates. Quasi.',
                'featured'         => '0',
                'category_id'      => 6,
                'created_by'       => 2,
                'updated_by'       => 2,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
            ],
            [
                'title'            => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'slug'             => 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-6',
                'body'             => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam perferendis enim rem a cum unde, labore iste quas quibusdam reprehenderit natus. Eligendi perspiciatis non dignissimos explicabo ipsum culpa voluptates. Quasi.',
                'featured'         => '0',
                'category_id'      => 1,
                'created_by'       => 2,
                'updated_by'       => 2,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
            ],
        ];

        Post::insert($posts);
    }
}
