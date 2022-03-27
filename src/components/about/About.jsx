import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small> 20+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 20+ Complated</small>
            </article>
          </div>
          <p >
            Graduated from Izmir University of Economics, Software Engineering.
            Started his career as a Software Developer in the field of banking
            software at VeriPark and worked with First Abu Dhabi Bank. During
            this time, started to develop himself as a Full-Stack Developer.
            Currently, works as a Software Engineer at Hugo Boss and do the
            digital transformation project of the Hugo Boss Swiss factory.
            Besides talking and analyzing with the customer, plays a role in the
            development of the product as a full-stack using C#, .net,
            Javascript, Angular, and Html technologies. In his spare time,
            develops himself in Artificial Intelligence and aims to increase his
            competence in advanced algorithms.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
