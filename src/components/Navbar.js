import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import menu from "../Images/menu.png"
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    return (
        <div>
            <div className='outerDiv'>
                <div className='innerDiv'>
                    <div className='shubhamDiv'>
                        <h3 className='shubhamText'>Shubham</h3>
                    </div>
                    <div className='navBarContentDiv'>
                        <Link to={"/"} className='linkStyle'><h3 >Home</h3></Link>

                        <Link to={"/DSA"} className='linkStyle'> <h3 >DSA</h3></Link>
                        <a href="https://shubhamsalian.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <h3>Portfolio</h3>
                        </a>

                        <Link to={"/Contact"} className='linkStyle'> <h3 >Contact</h3></Link>

                    </div>

                </div>
                <div className='menu_div'>
                    <img src={menu} alt='menu' className='menu' onClick={toggleMobileMenu}></img>

                </div>


            </div>
            <div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <Link to={"/"}><li><a href="/">Home</a></li></Link>
                    <Link to={"/DSA"} className='linkStyle'> <li><a href="#about">DSA</a></li></Link>
                    <li><a href="https://shubhamsalian.onrender.com/" target="_blank" rel="noopener noreferrer">
                        Portfolio
                    </a></li>
                    <Link to={"/Contact"} className='linkStyle'><li><a href="#contact">Contact</a></li></Link>
                </ul>
            </div>
        </div>

    )
}

export default Navbar