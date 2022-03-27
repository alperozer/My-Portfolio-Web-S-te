import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Dcenter iOPM</h3>
          <h5>
            The D-Center project is the digital transformation project of Hugo
            Boss' Swiss factory. Follow-up of the entire process from the entry
            of the raw material to the output as a product, thanks to this web
            application. In addition, operator performance and production
            efficiency can be controlled. The project was built with .net core
            entity framework and angular. It has been analyzed and implemented
            by me.
          </h5>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Covid Code Check</h3>
          <h5>
            I implemented this project myself for the Izmir Hugo Boss Factory, the
            main purpose of which is to find and report individuals with Covid.
            The project is a system that checks and reports the status of people
            from the state with a third-part service and contains many graphics.
            Written in .Net and Angular, it was built with Code First structure.
          </h5>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>First Abu Dhabi Bank</h3>
          <h5>
            I was assigned as an outsource to First Abu Dhabi Bank at my first
            workplace, VeriPark. Here I took part in the .Net project on the
            back-end side. I wrote the backend business side of many bank
            processes and coded many validation and security measures. The
            project was completed with a multicultural team. I created end
            points in the back-end and created business layers for these end
            points and coded the logics of bank transactions (EFT, money order,
            etc.).
          </h5>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
