import React from 'react';

const Portfolio = () => {
    return (
        <div className='container mx-auto py-12'>
            <h1 className='text-blue-700'>Our Portfolio</h1>

            <div className='flex justify-between items-center pb-8'>
                <div>
                    <h1 className='text-3xl text-blue-500'>Take a look some of our <br /> complete projects</h1>
                </div>
                <div>
                <button class="btn bg-blue-600 border-0">View All</button>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 '>
                <div className='' >
                    <img className='w-full' src="images/portfolio1.svg" alt="" />
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 pt-2'>
                    <div>
                    <img className='mb-10 w-full' src="images/portfolio2.svg" alt="" />
                    <img className='w-full' src="images/portfolio3.svg" alt="" />
                    </div>
                    <div>
                    <img className='mb-10 w-full' src="images/portfolio4.svg" alt="" />
                    <img className='w-full' src="images/portfolio5.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;