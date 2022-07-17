import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
    {
      name: 'Adams Bil',
      designation: 'Software Engineer',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis volutpat id pharetra venenatis malesuada egestas mauris.'
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
      <h1 className='text-xl text-blue-600'>Testimonial</h1>
      <p className='text-3xl text-blue-900 font-bold'>What our customers says <br /> about us</p>
      <Carousel
        responsive={responsive}>
        {
          testimonials.map((testimonial, index) => <div
            key={index}
            className="rounded-xl shadow-xl shadow-blue-200 m-8 p-4">
            <img className='py-2 w-8' src="/images/quote.svg" alt="" />
            <p>{testimonial.feedback}</p>

            <div className='flex items-center py-4'>
              <div class="avatar">
                <div class="w-14 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>

              <div className='ml-4'>
                <p>{testimonial.name}</p>
                <p className='text-blue-600'>{testimonial.designation}</p>
              </div>

            </div>

          </div>)
        }
      </Carousel>
    </div>
  );
};

export default Testimonial;