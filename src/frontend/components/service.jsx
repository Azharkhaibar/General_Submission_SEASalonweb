import React from "react";
import { Navbar } from "./home";
import { Footer } from "./home";
import '../../sass/services.scss'
import '../../sass/App.scss';
import { Link } from "react-router-dom";

export const StaticBanner = () => {
    return (
      <>
        <header id="bannerservices">
          <div className="bannerservices__container">
            <div className="bannerservices__content">
              <h1>Our Services</h1>
              <h4>
                Oribel lebih dari sekadar merek. Kami adalah keluarga. Budaya yang terdiri dari individu-individu yang berpikiran sama dari berbagai latar belakang. Kami menawarkan klien kami pengalaman perawatan seluruh tubuh terbaik yang
                tiada duanya.
              </h4>
            </div>
          </div>
        </header>
      </>
    );
}

export const ServicesCatalog = () => {
  const catalogItems = [
    {
      imgSrc: "/image/coloring.jpg",
      altText: "coloring__image",
      title: "Coloring Hair",
      description: "Keindahan alami terpancar dari keindahan rambut. Itu sebabnya ada ungkapan",
      link: "/coloring",
    },
    {
      imgSrc: "/image/haircuts.jpg",
      altText: "coloring__image",
      title: "Haircut",
      description: "Keindahan alami terpancar dari keindahan rambut. Itu sebabnya ada ungkapan",
      link: "/haircut",
    },
    {
      imgSrc: "public/image/facial treatment.jpg",
      altText: "coloring__image",
      title: "Facial Treatment",
      description: "Keindahan alami terpancar dari keindahan rambut. Itu sebabnya ada ungkapan",
      link: "/facialtreatment",
    },
    {
      imgSrc: "/image/coloring.jpg",
      altText: "coloring__image",
      title: "Coloring Hair",
      description: "Keindahan alami terpancar dari keindahan rambut. Itu sebabnya ada ungkapan",
      link: "/coloring",
    },
  ];

  return (
    <div id="catalog">
      <div className="catalog__container">
        {catalogItems.map((item, index) => (
          <div className="catalog__container__item" key={index}>
            <Link to={item.link}>
              <img src={item.imgSrc} alt={item.altText} />
            </Link>
            <div className="desc__catalog">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h4>Read More</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export class Services extends React.Component {
    render(){
        return (
          <div>
            <Navbar />
            <StaticBanner />
            <ServicesCatalog />
            <Footer />
          </div>
        );
    }
}