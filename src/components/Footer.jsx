import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="grid-container d-flex justify-content-center mt-5 gap-5 flex-wrap">
                <div className="grid-items">
                    <img className='mb-4' src="https://icasiostore.pk/wp-content/uploads/2018/09/logo.png" alt="" />
                    <p>We are making the legacy of watches<br></br> trending in Pakistan, all over once again by<br></br> providing 100% original products of Casio<br></br> and all the related sub-brands like Edifice,<br></br> Outgear, Protrek, G-Shock, Sheen and to<br></br> name the rest of them. Enjoy the shopping<br></br> of your favorite timepiece at the best<br></br> affordable prices</p>
                                </div>
                <div className="grid-items"><h6>Quick Links</h6>
                <p>Team</p>
                <p>Terms and Conditons</p>
                <p>Privacy Policy</p>
                <p>F.A.Q</p>
                </div>
                <div className="grid-items"><h6>GET IN TOUCH</h6>
                <p>Tel: 042 36297373<br></br>
                Mob: (+92) 333 5552 786<br></br>
                Email: info@icasiostore.pk</p>
                <h6 className='fw-lighter'>CASIO STORE</h6>
                <h6><b>We Only Deal Online</b></h6>
                <p>FF-12, Ist Floor, Empress Tower, 46-<br></br>Empress Road, Lahore, Pakistan.</p>
                </div>
                <div className="grid-items">
                    <h6>Allow Payment base on</h6>
                    <img className='billimg mt-2' src="https://icasiostore.pk/wp-content/uploads/2022/01/meezan-bank.webp" alt="" /><br></br>
                    <img className='billimg mt-2' src="https://icasiostore.pk/wp-content/uploads/2022/01/jazz-cash.webp" alt="" /><br></br>
                    <img className='billimg mt-2' src="https://icasiostore.pk/wp-content/uploads/2022/01/cod.webp" alt="" />
                    <h4 className='text-danger'>Designed by</h4><h6>Faiz Rasool</h6>
                </div>


                {/* <div className="social-icons ">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;
