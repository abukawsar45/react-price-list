import React, { useState } from 'react';
import Link from '../LInk/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact', path: '/contact' },
    { id: 4, name: 'Services', path: '/services' },
    { id: 5, name: 'Products', path: '/products' }
];


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-sky-300'>
            <div onClick={() => setOpen(!open)} className='md:hidden inline-block'>
                <span>{open ?
                    <XMarkIcon className="h-6 w-6 text-blue-500" />
                    :
                    <Bars3Icon className="h-6 w-6 text-blue-500" />
                } </span>

            </div>
            <ul className={`md:flex absolute md:static duration-700 md:duration-0 px-6 py-5 bg-neutral-400 md:p-4 ${open?'top-6':'-top-48'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;