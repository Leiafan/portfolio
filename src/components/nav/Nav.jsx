import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookCover} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" 
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about"
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience"
      onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}><GiBookCover /></a>
      <a href="#service"
      onClick={() => setActiveNav('#service')}
      className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}><AiFillHome /></a>
    </nav>
  )
}

export default Nav