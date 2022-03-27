import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaMedium} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alperozer9/" target="_blank" ><BsLinkedin/></a>
        <a href="https://github.com/alperozer" target="_blank"><BsGithub/></a>
        <a href="https://medium.com/@alperozer009" target="_blank"><FaMedium/></a>

    </div>
  )
}

export default HeaderSocial