import React from 'react';

const Footer = () => {
    return (
        <div className='text-white mt-24'>   
            <div className='bg-gradient-to-r from-blue-900 to-blue-500 py-12'>

            <div className='w-3/4 mx-auto bg-white rounded-lg flex justify-between items-center p-12 shadow-lg shadow-blue-600 footer'>
                <div>
                    <p className='text-blue-600'>Need a Software?</p>
                    <h1 className='text-3xl text-black'>We are here to help you <br /> get in touch with us.</h1>
                </div>
                <div>
                <button class="btn bg-blue-600 border-0">Contact Us</button>
                </div>
            </div>


                <h1 className='text-center font-bold text-2xl py-12'>LogoTech</h1>
                <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1'>
                    <div className='flex mx-auto'>
                        <div className='mr-5'>
                            <img className='bg-white p-2 rounded-lg ' src="images/contact/contact-1.png" alt="" />
                        </div>
                        <div>
                            <p className='text-xl'>Call Us</p>
                            <p>+880 157521452</p>
                            <p>+880 373737324</p>
                        </div>
                    </div>
                    <div className='flex mx-auto'>
                        <div className='mr-5'>
                            <img className='bg-white p-2 rounded-lg ' src="images/contact/contact-2.png" alt="" />
                        </div>
                        <div>
                            <p className='text-xl'>Email Us</p>
                            <p>support@logotech.com</p>
                            <p>logotech@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex mx-auto'>
                        <div className='mr-5'>
                            <img className='bg-white p-2 rounded-lg ' src="images/contact/contact-3.png" alt="" />
                        </div>
                        <div>
                            <p className='text-xl'>Locations</p>
                            <p>Middle Sha Ali Bag, Mirpur</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                   
                </div>
                <hr className='my-12' />
                <div className='text-center'>
                <p> copyright@LogoTech 2022 all the right reserved | Designed by LogoTech</p>
                <div className='text-2xl my-4'>
                <a href="" target={'_blank'} rel='noreferrer'><i class="fa-brands fa-facebook-square mr-4"></i> </a>
                        <a href="" target={'_blank'} rel='noreferrer'><i class="fa-brands fa-twitter-square mr-4"></i> </a>
                        <a href="" target={'_blank'} rel='noreferrer'><i class="fa-brands fa-instagram-square mr-4"></i> </a>
                        <a href="" target={'_blank'} rel='noreferrer'> <i class="fa-brands fa-github-square"></i></a>
                </div>

                </div>
            </div>
            
        </div>
    );
};

export default Footer;