import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import FeaturedMovie from '@/Components/FeaturedMovie';
import MovieCard from '@/Components/MovieCard';
import Authenticated from '@/Layouts/Authenticated/Index';
import Flickity from 'react-flickity-component'; // for scroll
import { Head, Link } from '@inertiajs/inertia-react';

export default function Dashboard(){
    //scroll option
    const flickoption = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            <title>Dashboard</title>
        </Head>
        <Authenticated>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" option={flickoption}>
                        {[1,2,3].map((i) => (
                            <FeaturedMovie 
                            key={i}
                            slug={`the-batman-${i}`}
                            name={`The Batman ${i}`}
                            category="Horror"
                            thumbnail={`/images/featured-${i}.png`}
                            rating={i}
                            />
                        ))}                         
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div class="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px]" option={flickoption}>
                        {[1,2,3,4,5].map((i) => (
                            <MovieCard 
                            key={i}
                            slug={`the-batman-${i}`}
                            name={`The Batman ${i}`}
                            category="Horror"
                            thumbnail={`/images/browse-${i}.png`}
                            />
                        ))}                         
                    </Flickity>
                </div>
        </Authenticated>
        </>
    )
}