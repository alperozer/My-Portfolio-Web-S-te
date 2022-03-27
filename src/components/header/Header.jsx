import React from 'react'
import CTA from './CTA'
import './header.css'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I am </h5>
        <h1>Alper Özer</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default header