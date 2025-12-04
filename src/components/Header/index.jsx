import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="headerwrapper row align-items-center">
                        <div className="logowrapper d-flex align-items-center col-sm-1 ">
                            <Link to={'/'}><img src={Logo} alt="Logo" />
                        {/*<span className='logo-text'>GEARHUB</span>*/}</Link>
                        </div>
                       
                        
                        <div className='col-sm-10 d-flex align-items-center '>
                        <div className="headerSearch" ml-3 mr-3>
                            <input type="text" placeholder='Search Here' />
                            <button><IoSearch/></button>
                        </div>
                        
                        <div className='d-flex align-items-center ml-auto'>
                            <button className='circle mr-3'><FaRegUser /></button>
                            <button className='circle ml-2'><IoBagHandleOutline /></button>      
                            <button className='circle ml-2'><CiHeart /></button>
                        </div>
                       
                        
                        </div>
                    </div>
                </div>   
            </header> 
        </>
    )
}


export default Header;
