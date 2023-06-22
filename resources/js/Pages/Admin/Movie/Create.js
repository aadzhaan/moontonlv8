import React, { useEffect } from 'react';
import Input from '@/Components/Input';
import Checkbox from '@/Components/Checkbox';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated/Index';
export default function Create({auth}){
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.dashboard.movie.store'));
    };
    return <Authenticated auth={auth}>
        <h1 className='text-xl'>Insert a New Movie</h1>
        <hr className='mt-2 mb-4'></hr>
        <ValidationErrors errors={errors}/>
        <form onSubmit={submit}>
        <div>
            <Label forInput="name" value="Title"/>
            <Input
             type="text"
             name="name"
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
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.video_url}
             required
             />
            <Label forInput="thumbnail" className="mt-4" value="Thumbnail"/>
            <Input
             type="file"
             name="thumbnail"
             placeholder="Enter Thumbnail of the Movie"
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.category}
             required
             />
            <Label forInput="rating" className="mt-4" value="Rating"/>
            <Input
             type="number"
             name="rating"
             placeholder="Enter Rating of the Movie"
             variant="primary-outline"
             handleChange={onHandleChange} 
             isError={errors.rating}
             required
             />
            <div className='flex flex-row mt-4 items-center'>
            <Checkbox name="is_featured" handleChange={(e) => setData("is_featured", e.target.checked)}/>
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