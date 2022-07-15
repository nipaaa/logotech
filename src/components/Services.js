import React from 'react';

const Services = () => {

    const services = [
        {
            id: 1,
            icon: 'images/icon/web-development-icon.png',
            title: 'Web Development',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            id: 2,
            icon: 'images/icon/app-development-icon.png',
            title: 'App Development',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            id: 3,
            icon:'images/icon/ui-ux-design-icon.png',
            title: 'UI/UX Design',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        },
        {
            id: 4,
            icon: 'images/icon/search-engine-optimization-icon.png',
            title: 'Search Engine Optimization',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque accumsan nam massa proin egestas molestie id hendrerit. Accumsan venenatis.'
        }
    ];

    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-center text-3xl font-bold pb-12'>Our Services</h1>

            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5'>
            {
                services.map(service => <div
                key={service.id}
                className='px-4 py-20 border rounded-lg drop-shadow-lg services service'>
                    <div className='flex justify-end items-center'>
                    <img className='icon-bg p-6' src={service.icon} alt="service logo" />
                    </div>
                    <h2 className='text-end text-xl py-2'>{service.title}</h2>
                    <p>{service.detail}</p>
                </div>)
            }
                
            </div>
        </div>
    );
};

export default Services;