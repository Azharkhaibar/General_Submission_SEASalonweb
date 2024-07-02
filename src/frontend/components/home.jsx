import '../../sass/App.scss';
import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServicesHome } from './homeservices';
import { ReviewSystem } from './homereviews';
import { Testimony } from './homereviews';
import ContactForm from '../../layout/contacthome';


const imagesBanner = [
  "/image/HD-wallpaper-beauty-salon-beautician.jpg",
  "/image/5-alasan-wanita-berhijab-harus-ke-salon-5IU-thumb.jpg",
  "/image/HD-wallpaper-beauty-salon-beautician.jpg"
]

export const Navbar = () => {


  return (
    <div>
      <nav id="navbar">
        <div className="navbar__logo">
          <h2>SEAsalon</h2>
        </div>
        <ul id="navbar__links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/reservation">RESERVATION</Link>
          </li>
        </ul>
        
      </nav>
    </div>
  );
};

export const BannerHome = () => {
  const [currentTrans, setCurrentTrans] = useState(0);

  useEffect(() => {
    const IntervalAnimateTime = setInterval(() => {
      setCurrentTrans((prevCurrentTrans) => (prevCurrentTrans === imagesBanner.length - 1 ? 0 : prevCurrentTrans + 1));
    }, 3000); 

    return () => clearInterval(IntervalAnimateTime);
  }, []);

  return (
    <header id="header">
      <div className="header__container">
        <div className="header__content">
          <h1>SEA Salon</h1>
          <h4>Beauty and Elegance Redefined</h4>
        </div>
        <div className="header__background">
          {imagesBanner.map((imageBanner, index) => (
            <motion.div
              key={index}
              className={`slide ${currentTrans === index ? "active" : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentTrans === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: `url(${imageBanner})` }}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

/* SERVICES HOME */

export const Aboutus = () => {
    return (
      <div>
        <div id="about">
          <div className="about__container">
            <div className="about__item">
              <img src="/image/salonabout.jpg" alt="salon__about" />
            </div>
            <div className="about__item">
              <h2>SEA salon</h2>
              <p>
                Realisasikan mimpi Anda untuk menjadi hairstylist dan make up artist ternama lewat Rudy Hadisuwarno School! Telah berdiri puluhan tahun dan sudah melahirkan berbagai MUA dan hairstylist hebat tersebar di seluruh Indonesia.
                Berbagai program dapat Anda pilih, mulai dari beginner hingga advanced lengkap. Dibimbing langsung oleh instruktur kecantikan profesional yang telah berpengalaman. Pembelajaran dapat dilakukan secara offline dan online. Dan
                yang paling penting, harganya terjangkau! Tidak ada kata terlambat, yuk segera ikuti program Rudy Hadisuwarno School dan bangun salon impian Anda!
              </p>
              <Link to="/services">
                <h4>Our Treatment</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export const PromotDesc = () => {

  const img__collase = {
    collase1: '/images/cewe1.jpg',
    pictstudio: '/images/potostudionya.jpg',
    collase2: '/images/cewe2.jpg'
  }

  return (
    <>
      <div id="promot">
        <div className="txt__promot">
          <h4>IT’S YOUR TIME TO SHINE</h4>
          <h2>
            Unleash your inner beauty with <br />
            our salon magic
          </h2>
        </div>
        <div className="promot__collase__container">
          <div className="promot__collase__item">
            <img src={img__collase.collase1} />
            <div className="column__collase">
              <div className="text__column__collase">
                <h2>Don’t be ordinary, be extraordinary</h2>
                <h4>Sagittis congue augue an egestas integer velna purus purus magna libero suscipit and egestas magna undo aliquam ipsum purus lorem ipsum dolar</h4>
              </div>
              <img src={img__collase.pictstudio} className='img__text'/>
            </div>
            <img src={img__collase.collase2} />
          </div>
        </div>
      </div>
    </>
  );
}



export const BookingSection = () => {
  return (
    <>
      <div id="booking">
        <div className="booking__container">
          <h4>Our Special Offer</h4>
          <h2>YOU OWE YOURSELF THIS MOMENT</h2>
          <h3>Make a appointment</h3>
        </div>
      </div>
    </>
  );
}

export const LocationAndContact = () => {
  
  return(
    <>
      <div id='contact__section'>
        <div className='contact__right'>
          <div className='gmaps__location'>
            {/* Gunakan iframe untuk menampilkan peta */}
            <iframe
              width="100%"
              height="400"
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Universitas+Indonesia"
            ></iframe>
          </div>
        </div>

        <div className='contact__left'>
          <div className='contact__title'>
            <h4>contact us</h4>
            <h2>have question?</h2>
          </div>
          <ContactForm />

        </div>
      </div>
    </>
  )
}

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer__container">
        <div className="footer__column">
          <div className="item__left__container">
            <h1>SEA SALON</h1>
            <p>Jl. Cideng Barat No.117C, RT.12/RW.1, Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10150</p>
            <h4>Whatsapp: 0895359714121</h4>
            <h4>
              Email: <a href="mailto:rudyhadigroup@gmail.com">rudyhadigroup@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className="footer__column">
          <div className="item__middle__container">
            <h3>Company</h3>
            <h4>
              <a href="#services">Service</a>
            </h4>
            <h4>
              <a href="#reservation">Reservation</a>
            </h4>
          </div>
        </div>
        <div className="footer__column">
          <div className="item__right__container">
            <h3>Information</h3>
            <h4>
              <a href="#contact">Contact</a>
            </h4>
            <h4>
              <a href="#career">Career</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};





export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <BannerHome />
        <ServicesHome />
        <Aboutus />
        <PromotDesc />
        <Testimony />
        <BookingSection />
        <LocationAndContact />
        <ReviewSystem />
        <Footer />
      </div>
    );
  }
}