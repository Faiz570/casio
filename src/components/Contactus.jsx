import React from 'react'

function Contactus() {
  window.scrollTo(0, 0);  
  return (
    <>
    <div class="card bg-dark text-white mb-3">
  <img src="https://images-aka.hsamuel.co.uk/content/casio/HSam_HeroBanner_1400x528px_SCREEN.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <div className="social-icons d-flex gap-2  ">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <p>Phone No: +92 333 5552 786</p> 
                </div>
    <img src="https://casiostore.pk/wp-content/uploads/2018/09/logo.png" alt="" />
    <h1 class="card-title text-start fw-lighter mt-5">Contact Us</h1> 
  </div>
</div> 
<div className="container  ">
  <div className="row">
    <div className="col-9">
      <div class="input-group">
  <span class="input-group-text text-muted ">YOUR NAME</span>
  <input type="text" aria-label="First name" class="form-control"/>
  <input type="text" aria-label="Last name" class="form-control"/>
</div>
<div class="form-floating mb-3 mt-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput text-muted">EMAIL</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword text-muted">Password</label>
</div>
<div class="form-floating mt-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2 text-muted">MESSAGE</label>
</div>
<button type="button" class="btn btn-danger mt-3 mb-3"><b>SEND MESSAGE</b></button>
 </div>
      <div className="col-3 ">
        <h1 className='fw-lighter text-muted '>CONTACT INFO</h1>
      <h3 className='fw-lighter text-muted'>FF-12, 1st Floor, Empress<br></br> Tower, 46-Empress Road,<br></br> Lahore, Pakistan</h3>
      <p></p></div>
      </div>
    </div>
    </>
  )
}

export default Contactus
