import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__sitemap" >
                    <h5>Sitemap</h5>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Products</a></li>
                    </ul>
                </div>
                <div className="footer__contact-form">
                    <h5>Contact</h5>
                    <form>
                    <input className="form-control mb-2" type="text" name="fullName" placeholder="Full Name" />
                    <input className="form-control mb-2" type="text" name="email" placeholder="Email" />
                    <textarea className="form-control mb-2" name="message" cols="30" rows="4" placeholder="Message">
                    </textarea>
                    <input className="btn btn-dark" type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="footer__details">
                    <img src="https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png" alt=""/>
                    <i class="fas fa-phone-alt"> (+91) 10000000000</i>  <br />
                    <i class="fas fa-envelope"> ourCompany@gmail.com</i>
                </div>
            </footer>
            <div className="footer__copyright">
                Copyright &copy; 2020 All Rights Reserved Company name 
            </div>
        </>
    )
}

export default Footer;
