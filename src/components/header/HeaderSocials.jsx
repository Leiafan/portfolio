import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><AiFillGithub /></a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer"><AiFillDribbbleCircle /></a>
      </div>
  )
}

export default HeaderSocials