import React, { useEffect } from 'react';
import Input from '@/Components/Input';
import Checkbox from '@/Components/Checkbox';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Authenticated from '@/Layouts/Authenticated/Index';
export default function Edit({auth, movie}){
    const { data, setData, processing, errors } = useForm({
        ...movie
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if(data.thumbnail === movie.thumbnail){
            delete data.thumbnail;
        }
        Inertia.post(route('admin.dashboard.movie.update', movie.id),{
            _method: 'PUT',
            ...data
        });
    };
    return <Authenticated auth={auth}>
        <Head title="Admin - Edit Movie"/>
        <h1 className='text-xl'>Update a Movie: {movie.name}</h1>
        <hr className='mt-2 mb-4'></hr>
        <ValidationErrors errors={errors}/>
        <form onSubmit={submit}>
        <div>
            <Label forInput="name" value="Title"/>
            <Input
             type="text"
             name="name"
             defaultValue={movie.name}
             placeholder="Enter Title of the Movie"
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.name}
             required
             />
            <Label forInput="category" className="mt-4" value="Category"/>
            <Input
             type="text"
             name="category"
             defaultValue={movie.category}
             placeholder="Enter Category of the Movie"
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.category}
             required
             />
            <Label forInput="video_url" className="mt-4" value="Movie Link"/>
            <Input
             type="text"
             name="video_url"
             placeholder="Enter Video Link of the Movie"
             defaultValue={movie.video_url}
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.video_url}
             required
             />
            <Label forInput="thumbnail" className="mt-4" value="Thumbnail"/>
            <img src={`/storage/${movie.thumbnail}`} className="w-40 rounded"/>
            <Input
             type="file"
             name="thumbnail"
             placeholder="Enter Thumbnail of the Movie"
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.thumbnail}
             
             />
            <Label forInput="rating" className="mt-4" value="Rating"/>
            <Input
             type="number"
             name="rating"
             placeholder="Enter Rating of the Movie"
             defaultValue={movie.rating}
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.rating}
             required
             />
            <div className='flex flex-row mt-4 items-center'>
            <Checkbox name="is_featured" handleChange={(e) => setData("is_featured", e.target.checked)} checked={movie.is_featured}/>
            <Label forInput="is_featured" className="mx-4 mt-2" value="Is Featured"/>
            </div>
            <Button type="submit" processing={processing} variant='primary'>
                <span className="text-base font-semibold">
                    Save
                </span>
            </Button>
            
        </div>
        </form>
    </Authenticated>;
}