import React, { useState } from 'react'
import './Navbar.scss'
import logo_transparent from "../../assets/logo_transparent.png"
import {motion} from 'framer-motion'
import {GiHamburgerMenu} from 'react-icons/gi'
import{HiX} from 'react-icons/hi'

const Navbar = () => {
    const[ toggle,setToggle]=useState(false);
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={logo_transparent} alt="logo"/>
        </div>
        <ul className='app__navbar-links'>
        {['home', 'about','work', 'skills', 'contact'].map((item)=> (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div>
                        <a href={`#${item}`}>{item}</a>
                    </div>
                </li>
            ))} 
        </ul>
        <div className='app__navbar-menu'>
                <GiHamburgerMenu onClick={()=> setToggle(true)}/>
            {
                toggle && (
                    <motion.div
                    whileInView={{x:[300 ,0]}}
                    transition={{duration:0.85, ease: "easeOut"}}
                    >
                        <HiX onClick={()=> setToggle(false)}/>
                        <ul>
                        {['home', 'about','work', 'skills', 'contact'].map((item)=> (
                <li key={item}>
                   
                        <a href={`#${item}`} onClick={()=> setToggle(true)}>{item}</a>
                    
                </li>
                
            ))} 
            </ul>
                    </motion.div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar
