import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Service</Link></li>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Company</Link></li>
    </>

    return (
        <div>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-800 rounded-box w-52">
                        {menuItem}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl">LogoTech</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        {menuItem}
                    </ul>
                </div>
                <div class="navbar-end text-xl">
                    <a class="border px-2 rounded text-white mr-4">Sign Up</a>
                    <a class="border bg-white text-blue-600 px-2 rounded">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Menubar;