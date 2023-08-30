import React from 'react';
import './Gallery.css';

function Gallery() {

  
  
  
  
  window.scrollTo(0, 0);
  return (
    <>
      <div className="card bg-dark text-white mb-3">
        <img src="https://images-aka.hsamuel.co.uk/content/casio/HSam_HeroBanner_1400x528px_SCREEN.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
          <div className="social-icons d-flex gap-2">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <p>Phone No: +92 333 5552 786</p>
          </div>
          <img src="https://casiostore.pk/wp-content/uploads/2018/09/logo.png" alt="" />
          <h1 className="card-title text-start fw-lighter mt-5">Gallery</h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img className='gcard' src="https://icasiostore.pk/wp-content/uploads/2020/02/Gallery-1.jpg" alt="" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img className='gcard' src="https://icasiostore.pk/wp-content/uploads/2020/02/Gallery-2.jpg" alt="" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img className='gcard' src="https://icasiostore.pk/wp-content/uploads/2020/02/Gallery-3.jpg" alt="" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img className='gcard' src="https://icasiostore.pk/wp-content/uploads/2020/02/Gallery-4.jpg" alt="" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img className='gcard' src="https://icasiostore.pk/wp-content/uploads/2020/02/Gallery-5.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
