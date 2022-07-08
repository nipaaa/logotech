import React from 'react';

const Services = () => {
    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-center text-3xl font-bold pb-8'>Our Services</h1>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5'>
                <div className='px-4 py-12 border rounded-lg drop-shadow-lg services service'>
                    <p className='text-end text-white'><i class="bg-blue-500 p-2 rounded-xl fa-solid fa-globe text-2xl"></i></p>
                    <h2 className='text-xl text-end'>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aspernatur. Explicabo, nulla beatae, quos corporis id recusandae laboriosam voluptatum.</p>
                </div>
                <div className='p-4 border'>
                    <h2 className='text-xl'>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aspernatur. Explicabo, nulla beatae, quos corporis id recusandae laboriosam voluptatum.</p>
                </div>
                <div className='p-4 border'>
                    <h2 className='text-xl'>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aspernatur. Explicabo, nulla beatae, quos corporis id recusandae laboriosam voluptatum.</p>
                </div>
                <div className='p-4 border'>
                    <h2 className='text-xl'>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aspernatur. Explicabo, nulla beatae, quos corporis id recusandae laboriosam voluptatum.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;