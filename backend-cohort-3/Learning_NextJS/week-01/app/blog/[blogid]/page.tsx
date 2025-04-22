import axios from 'axios'
import React from 'react'

const Blog = async ({ params }: any) => {
    const blogId = await params.blogid
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
    const data = response.data;
    console.log(data);


    return (
        <div className='mx-1 my-8 p-8 border-2 border-gray-500  rounded-md shadow-2xl'>
            <h1 className='text-4xl font-semibold mb-2'> {params.blogid} {data.title}</h1>
            <p className='text-sm text-gray-300'>Body - {data.body}</p>
        </div>
    )
}

export default Blog