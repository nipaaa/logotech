import React from 'react';
import Banner from './Banner';
import Menubar from './Menubar';

const Header = () => {
    return (
        <div className='text-white banner'>
            <Menubar></Menubar>
            <Banner></Banner>
        </div>
    );
};

export default Header;