import React from 'react';
import Carousel from 'react-multi-carousel';

const Team = () => {

    const teamMembers = [
        {
            avater: '/images/team/member-1.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-2.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-3.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-4.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-1.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-2.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-3.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-4.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-1.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-2.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-3.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-4.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-1.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-2.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-3.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-4.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-1.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-2.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-3.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-4.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-1.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-2.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-3.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-4.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-1.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {
            avater: '/images/team/member-2.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        },
        {  
            avater: '/images/team/member-3.png',
            name: 'Mr . jhonny Adams',
            designation: 'Software Engineer'
        }
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='container mx-auto py-24'>
            <h1>Our team</h1>
            <p className='text-xl mb-6'>Meet our team members</p>

            <Carousel
                responsive={responsive}>

                {
                    teamMembers.map((member, index) => <div
                        key={index}
                        class="w-60 bg-base-100 border rounded-lg">
                        <figure class="p-1">
                            <img src={member.avater} alt="member" class="rounded-xl" />
                        </figure>
                        <div class="items-center text-center ">
                            <h2 class="font-bold text-blue-900">{member.name}</h2>
                            <p>{member.designation}</p>
                            <div className='text-2xl my-2'>
                                <a href="" target={'_blank'} rel='noreferrer'><i class="fa-brands fa-facebook-square mr-4"></i> </a>
                                <a href="" target={'_blank'} rel='noreferrer'><i class="fa-brands fa-twitter-square mr-4"></i> </a>
                                <a href="" target={'_blank'} rel='noreferrer'><i class="fa-brands fa-instagram-square mr-4"></i> </a>
                                <a href="" target={'_blank'} rel='noreferrer'> <i class="fa-brands fa-github-square"></i></a>
                            </div>
                        </div>
                    </div>)
                }
            </Carousel>



        </div>
    );
};

export default Team;