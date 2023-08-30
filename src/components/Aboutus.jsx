import React from 'react';
import './Aboutus.css';

function Aboutus() {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="card bg-dark text-white">
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
          <h1 className="card-title text-start fw-lighter mt-5">ABOUT OUR COMPANY</h1>
          <p className="card-text"> GET TO KNOW US BETTER</p>
        </div>
      </div>
      <div className="cstore">
        <h1 className="mt-5 text-center text-secondary">Casio Store, Maintain The Pride & Authenticity of Casio Products</h1>
        <p className="text-muted text-center">We are proud that we have maintained the respect and level of Casio, by selling genuine and original products of Casio, from watches to<br />calculators & labelled printers. We have maintained the expectation of selling their products more than expectations. We have also<br />established ourselves on social platforms so that everybody can reach us easily and instantly. So come join us and embrace yourself by<br />shopping with Pakistan’s Casio Selling Market. We are making the legacy of watches trending in Pakistan, all over once again by providing<br/> 100% original products of Casio and all the related sub-brands like Edifice, Outgear, Protrek, G-Shock, Sheen and more.<br/> Enjoy the shopping of your favorite timepiece at the best affordable prices.</p>
      </div>
      <center>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex gap-5">
            <div className="card">
             <center> <img className="csimg" src="https://icasiostore.pk/wp-content/uploads/2022/01/g-shcok.webp" alt="" /></center>
              <h5>G-Shock</h5>
              <p>G-Shock, Casio one of the best inventions because it revives the sports look watches in a new<br />advancing way. Durable, Resistant<br />& Strong Structure, these models are all in one.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex gap-5">
            <div className="card">
             <center> <img className="csimg" src="https://icasiostore.pk/wp-content/uploads/2022/01/edifice.webp" alt="" /></center>
              <h5>Edifice</h5>
              <p>Casio Edifice, this creation of Casio is dealing with technology. Having a chronograph look for almost all models.Moreover, supporting application linking! WOW!</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex gap-5">
            <div className="card">
            <center> <img className="csimg" src="https://icasiostore.pk/wp-content/uploads/2022/01/sheen-casio.webp" alt="" /></center>
              <h5>Sheen</h5>
              <p>Fashionable Timepiece, Having Stony & Jewelry Look. Casio Sheen, is completely a series dignified for ladies. So, at Casio Store we are providing these timepieces to<br />the women of Pakistan</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex gap-5">
            <div className="card">
            <center> <img className="csimg" src="https://icasiostore.pk/wp-content/uploads/2022/01/protrek.webp" alt="" /></center>
              <h5>ProTrek</h5>
              <p>Pro Trek, Casio one of the major<br />productive watch offering<br />numerous features together with<br />its rugged, stylish and impeccable timepiece look. Moreover, complete advancing feature watches.</p>
            </div>
          </div>
        </div>
      </div>
      </center>
      <div className="cmount text-muted text-center mb-5">
        <h1>Casio Store, Climbing Mount of Mission With Impeccable Vision</h1>
        <p className="fw-lighter">The vision of making Casio Store, Pakistan's online store on such a scale was the vision of President Mr. Abid Mushtaq Ch. We have made ourselves proud by satisfying the customers reaching us. We provide their demand on to the doorsteps completely satisfying every need they<br />expect from us.<br />We have made ourselves the best online store in Pakistan by maintaining the originality of genuine products. Our deliverance of products is the<br />main reason that we are in the place. All these best services made us famous and popular among the people. Moreover, in the market of<br />Pakistan, we are known as Casio Pakistan. It is our gratitude that we have reached at such a level in Pakistan by every means in the market. Our<br />online market and team is enthusiastic about providing the progress of every order that comes to us. Moreover, Casio Store is open to all by every<br />means, providing Casio products from wall clocks to hand wear timepieces to calculators & label printers.</p>
      </div>
      <div className="end text-danger text-center gap-3">
        <marquee behavior="" direction="right"><h1 className="text-danger">C      A      S      I     O</h1></marquee>
        <h1>Company Offers Complete Official Warranty</h1>
        <h4 className="text-muted fw-lighter">Providing you complete Warranty with easy-to-understand Terms & Conditions</h4>
        <div className="endbtn text-center mb-5"><button type="button" className="btn btn-outline-danger"><b>GET A QUOTE</b></button></div>
      </div>
      
    </>
  );
}

export default Aboutus;
