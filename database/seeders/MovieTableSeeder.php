<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Parasite',
                'slug' => 'parasite',
                'category' => 'Thriller',
                'video_url' => 'https://youtu.be/5xH0HfJHsaY',
                'thumbnail' => 'https://w0.peakpx.com/wallpaper/288/777/HD-wallpaper-movie-parasite-thumbnail.jpg',
                'rating' => '8.5',
                'is_featured' => true
            ],
            [
                'name' => 'Extreme Job',
                'slug' => 'extreme-job',
                'category' => 'Comedy',
                'video_url' => 'https://youtu.be/l9Hu3Xocc-g',
                'thumbnail' => 'https://pict.sindonews.net/dyn/620/content/2019/03/04/158/1383753/extreme-job-jadi-film-korea-dengan-pendapatan-tertinggi-FZQ-thumb.jpg',
                'rating' => 7.0,
                'is_featured' => false
            ],
            [
                'name' => 'Midnight Runners',
                'slug' => 'midnight-runners',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/cyVk51ksx4o',
                'thumbnail' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/04bb11b3f96762cbc8c60bc858481dfbd92fc3da4a5217a69f212e117a5c6a3f._UY500_UX667_RI_TTW_.jpg',
                'rating' => 7.3,
                'is_featured' => true
            ],
            [
                'name' => 'Train to Busan',
                'slug' => 'train-to-busan',
                'category' => 'Horror',
                'video_url' => 'https://youtu.be/pyWuHv2-Abk',
                'thumbnail' => 'https://wallpapercave.com/wp/wp8996805.jpg',
                'rating' => 7.6,
                'is_featured' => false 
            ],
            [
                'name' => 'Tune in for Love',
                'slug' => 'tune-in-for-love',
                'category' => 'Romance',
                'video_url' => 'https://youtu.be/O2x8gaL5Omw',
                'thumbnail' => 'https://inikpop.com/wp-content/uploads/2019/07/tune-in-for-love-1.jpeg',
                'rating' => 7.1,
                'is_featured' => true 
            ],
        ];
        Movie::insert($movies);
    }
}
