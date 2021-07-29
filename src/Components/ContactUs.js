import React from 'react'

function ContactUs() {
    return (
        <div className="contactus">
            
            <div className="col-12 col-sm-8 offset-sm-1">
                <h4>Contact Us</h4>
                <br/>
                <h5>Our Address</h5>
                    <address>
                        No :28<br />
                        Kandy Road<br />
                        Kandy<br />
                        <i className="fa fa-phone"></i>: +94 81 123 4568<br />
                        <i className="fa fa-fax"></i>: +94 81 123 4568<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:csup@sci.pdn.ac.lk">sasi@gmail.com</a>
                    </address>
                
            </div>
            <div className="col-12 col-sm-8 offset-sm-1 ">
                    <h5>Social Media Links</h5>
                    <div className="col">
                    </div>
                </div>
        </div>
    )
}

export default ContactUs
