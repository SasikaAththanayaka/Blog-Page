import React from 'react';
//import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a to="/home"> Home</a></li>
                        <li><a to="/aboutus">About</a></li>
                        <li><a to="/menu">Menu</a></li>
                        <li><a to="/contactus">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Department of Statistics and Computer Science<br />
		              Faculty of Science<br />
		              University of Peradeniya<br />
		              <i className="fa fa-phone fa-lg"></i>: +94 81 123 4568<br />
		              <i className="fa fa-fax fa-lg"></i>: +94 81 123 4568<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:computerscience@sci.pdn.ac.lk">
                         computerscience@sci.pdn.ac.lk</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Computer Society - University of Peradeniya</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;