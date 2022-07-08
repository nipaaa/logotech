import React from 'react';

const Portfolio = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-blue-800'>Our Portfolio</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 '>
                <div className='' >
                    <img className='w-full' src="images/portfolio1.svg" alt="" />
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
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