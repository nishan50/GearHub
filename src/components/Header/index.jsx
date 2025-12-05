import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
const Header = () => {
    return (
        <header className="sticky top-0 z-50 py-5 bg-white shadow-md">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                className="w-12 h-auto transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative flex items-center h-12 bg-gray-100 rounded-lg px-4 border border-transparent hover:border-gray-300 transition-all duration-300">
                            <input 
                                type="text" 
                                placeholder="Search Here" 
                                className="flex-1 bg-transparent outline-none text-sm text-gray-800 font-normal border-none"
                            />
                            <button className="absolute right-3 text-gray-600">
                                <IoSearch size={20} />
                            </button>
                        </div>
                    </div>
                    
                    {/* Icons */}
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">
                            <FaRegUser size={22} />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">
                            <IoBagHandleOutline size={22} />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">
                            <CiHeart size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
