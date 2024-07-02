import '../sass/bannerlayout.scss';
import React from 'react';
import { Link } from 'react-router-dom';


export const BannerReservation = () => {
  return (
    <>
      <div id="banner__reservation">
        <div className="banner__reservation__container">
          <div className="banner__reservation__text">
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <h4>Reservation</h4>
          </div>
          <h2>Reservation</h2>
        </div>
      </div>
    </>
  );
};

export const BannerColoring = () => {
    return (
      <>
        <div id="banner__coloring">
          <div className="banner__coloring__container">
            <div className="banner__coloring__text">
              <Link to="/">
                <h4>Home</h4>
              </Link>
              <h4>coloring</h4>
            </div>
            <h2>Coloring</h2>
          </div>
        </div>
      </>
    );
};

export const BannerHaircut = () => {
    return (
      <>
        <div id="banner__haircut">
          <div className="banner__haircut__container">
            <div className="banner__haircut__text">
              <Link to="/">
                <h4>Home</h4>
              </Link>
              <h4>haircut</h4>
            </div>
            <h2>Haircut</h2>
          </div>
        </div>
      </>
    );
}

export const BannerFacialTreatment = () => {
  return (
    <>
      <div id="banner__facial">
        <div className="banner__facial__container">
          <div className="banner__facial__text">
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <h4>Facialtreatment</h4>
          </div>
          <h2>Facial treatment</h2>
        </div>
      </div>
    </>
  );
};

export const BannerPredicure = () => {
  return (
    <>
      <div id="banner__predicure">
        <div className="banner__predicure__container">
          <div className="banner__predicure__text">
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <h4>Manicure</h4>
          </div>
          <h2>Pedicure & Manicure</h2>
        </div>
      </div>
    </>
  );
};