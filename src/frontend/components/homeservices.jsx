import React from "react";
import "../../sass/App.scss";
import { Link } from "react-router-dom";

const servicesData = [
  { src: "/image/haircuts.jpg", title: "Haircut", link: "/haircut" },
  { src: "/image/coloring.jpg", title: "Coloring", link: "/coloring" },
  { src: "/image/facial treatment.jpg", title: "Facial treatment", link: "/facialtreatment" },
  { src: "/image/manicure pedicure.jpg", title: "Manicure", link: "/predicure" },
];

export const ServicesHome = () => (
  <div>
    <div id="services">
      <div className="txt__services">
        <h2>Our Treatment</h2>
        <Link to="/services">
          <h3>View All</h3>
        </Link>
      </div>
      <div className="services__container">
        {servicesData.map((service, index) => (
          <div className="services__item" key={index}>
            <Link to={service.link}>
              <img src={service.src} alt={service.title} />
            </Link>
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);
