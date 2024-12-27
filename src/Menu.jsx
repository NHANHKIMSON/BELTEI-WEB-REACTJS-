import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <>
<nav className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-50">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</LIN>
                </li>
                <li>
                    <Link to="/university" className="text-gray-900 dark:text-white hover:underline">University</Link>
                </li>
                <li>
                    <Link to="/academics" className="text-gray-900 dark:text-white hover:underline">Academics</Link>
                </li>
                <li>
                    <Link to="/features" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>           
        </>
    );
}

export default Menu;