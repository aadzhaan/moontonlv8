import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import FeaturedMovie from '@/Components/FeaturedMovie';
import MovieCard from '@/Components/MovieCard';
import Authenticated from '@/Layouts/Authenticated/Index';
import Flickity from 'react-flickity-component'; // for scroll
import { Head, Link } from '@inertiajs/inertia-react';

//featuredmovie dan allmovie didapatkan dari api (propsnya)
export default function Dashboard({auth, featuredmovie, allmovie}){
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
        <Authenticated auth={auth}>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" option={flickoption}>
                        {featuredmovie.map((data) => (
                            <FeaturedMovie 
                            key={data.id}
                            slug={data.slug}
                            name={data.name}
                            category={data.category}
                            thumbnail={data.thumbnail}
                            rating={data.rating}
                            />
                        ))}                         
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div class="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px]" option={flickoption}>
                        {allmovie.map((data) => (
                            <MovieCard 
                            key={data.id}
                            slug={data.slug}
                            name={data.name}
                            category={data.category}
                            thumbnail={data.thumbnail}
                            />
                        ))}                         
                    </Flickity>
                </div>
        </Authenticated>
        </>
    )
}