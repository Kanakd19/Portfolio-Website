import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap'
import profile from "../../assets/profile.png"
import circle from "../../assets/circle.svg"
import react from "../../assets/react.png"
import sass from "../../assets/sass.png"
import redux from "../../assets/redux.png"
const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100, 0], opacity:[0,5]}}
      transition={{duration:0.5}}
      className="app__header-info"
      >
        <div className="app__header-badge">
            <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{marginLeft:20}}>
                    <p className='p-text'>Hello, I'm </p>
                    <h1 className="head-text">Kanak</h1>
                </div>
            </div>
            <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer </p>
             <p className='p-text'>Full Stack Developer</p>

            </div>
        </div>

      </motion.div>

      <motion.div
      whileInView={{x:[-100, 0], opacity:[0,1]}}
      transition={{duration:0.5, delayChildren:0.5}}
      className="app__header-img">
        <img src={profile} alt='profile_bg'/>
        <motion.img
         whileInView={{x:[-100, 0], opacity:[0,1]}}
         transition={{duration:1, ease: 'easeInOut'}}
         className="overlay-circle"
         src={circle} alt='profile-circle'
         />
        </motion.div>
        
      <motion.div
       whileInView={{x:[0, 1], opacity:[0,1]}}
       transition={{duration:1, ease: 'easeInOut'}}
       className="app__header-circles"
       src={circle} alt='profile-circle'
       >
        {[redux, react, sass].map((circle, index)=>(
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="circle"/>
                
            </div>
        ))}
        
    </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
