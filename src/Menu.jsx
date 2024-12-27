import React from 'react';

function Menu(props) {
    return (
        <>
<nav className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-50">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/university" className="text-gray-900 dark:text-white hover:underline">University</a>
                </li>
                <li>
                    <a href="/academics" className="text-gray-900 dark:text-white hover:underline">Academics</a>
                </li>
                <li>
                    <a href="/features" className="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>           
        </>
    );
}

export default Menu;