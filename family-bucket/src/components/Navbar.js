import React, { Component } from 'react';
import { Routes, Route, Router, BrowserRouter, Link } from 'react-router-dom';
import icon from './images/logo.jpg';

export default function Navbar() {

    return (
        <nav className="px-2 sm:px-4 py-2.5 bg-navbar-white shadow-lg sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex items-center">
                    <img src={icon} className="mr-3 h-12 sm:h-15" alt="THC Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-grey-200">THC Fastfood</span>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white">
                                Order
                            </a>
                        </li>
                        <li>
                            <a href="recommendation" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-green-700 md:border-0 md:hover:text-green-700 md:p-0">I'm feeling lucky</a>
                        </li>
                        <li>
                            <a href="cart" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-green-700 md:border-0 md:hover:text-green-700 md:p-0">Shopping Cart</a>
                        </li>
                        <li>
                            <a href="contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-green-700 md:border-0 md:hover:text-green-700 md:p-0">Contact</a>
                        </li>
                        <li>
                            <a href="login" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-green-700 md:border-0 md:hover:text-green-700 md:p-0">Login</a>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    )
}