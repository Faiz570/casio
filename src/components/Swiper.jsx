import React from 'react';
import './Swiper.css'

function Swiper() {
  
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/G-Shock.jpg" className="d-block w-100 " alt="Slide 1"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/EQS-800CDB-1A-1.jpg" className="d-block w-100" alt="Slide 2"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/PRW-3510-1.jpg" className="d-block w-100" alt="Slide 3"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/ECB-900DC-1A-2.jpg" className="d-block w-100" alt="Slide 4"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/SHE-3059SG-7.jpg" className="d-block w-100" alt="Slide 5"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/KL-120.jpg" className="d-block w-100" alt="Slide 6"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/BGD-570-1DR-2.jpg" className="d-block w-100" alt="Slide 7"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/AE-2000WD-1AV-slider.jpg" className="d-block w-100" alt="Slide 8"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/HS-80TW-1.jpg" className="d-block w-100" alt="Slide 9"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/MTP-VT01L-7B2-silder.jpg" className="d-block w-100" alt="Slide 10"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://casiostore.pk/wp-content/uploads/2019/10/82ex-slider.jpg" className="d-block w-100" alt="Slide 11"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Swiper;
