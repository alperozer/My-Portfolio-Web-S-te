import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>Business Analyst</div>
          <ul className='service__list'>
          <li>
              < BiCheck className='service__list-icon' />
              <p>Analyst at the Production Sites for Digital Transformation</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Analyst for Banking Systems</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>UI and UX analysis for Custom Request</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Algorithm Development</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>Web Development</div>
          <ul className='service__list'>
            <li>
              < BiCheck className='service__list-icon' />
              <p>.Net Core Entity Framework Projects</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Angular FrontEnd Projects</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>React FrontEnd Projects</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Custom Design Projects with Html and Css </p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>Project Management</div>
          <ul className='service__list'>
          <li>
              < BiCheck className='service__list-icon' />
              <p>Team Management and Leadership</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Project Management and Tracking</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Preparing Project Infrastructure</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Scrum and Agile Management</p>
            </li>
          
          </ul>
        </article>
      </div>



    </section>
  )
}

export default Services 