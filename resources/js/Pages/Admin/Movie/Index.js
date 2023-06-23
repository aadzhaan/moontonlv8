import Authenticated from '@/Layouts/Authenticated/Index';
import Button from '@/Components/Button';
import FlashMessage from '@/Components/FlashMessage';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Index({auth, flashMessage, movies}){
    const { delete: destroy, put } = useForm();
    return <Authenticated auth={auth}>
        <Head title=''/>
        <Link href={route('admin.dashboard.movie.create')}>
        <Button type='button' className='w-40 mb-8'>Insert New Movie</Button>
        </Link>
        {flashMessage?.message && <FlashMessage message={flashMessage.message}/>}
        <table className='table-fixed border-red b-1 w-full text-center'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
            {movies.map((data, index) => (
                <tr key={data.id}>
                    <td><img src={`/storage/${data.thumbnail}`} className='w-32 rounded'/></td>
                    <td>{data.name}</td>
                    <td>{data.category}</td>
                    <td>{data.rating.toFixed(1)}</td>
                    <td><Link href={route('admin.dashboard.movie.edit', data.id)}><Button type='button' vaiant="warning">Edit</Button></Link></td>
                    <td><Button type='button' vaiant="danger" onClick={() => 
                        data.deleted_at ? 
                        put(route('admin.dashboard.movie.restore', data.id)) : 
                        destroy(route('admin.dashboard.movie.destroy', data.id))}>
                            {data.deleted_at ? "Restore" : "Delete"}
                        </Button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </Authenticated>;
}