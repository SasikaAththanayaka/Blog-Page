import React from 'react'
import {Card} from 'react-bootstrap';
function About() {
    return (
        <div className="container">
                <div className="col-12 col-md m-1 ">
                    <Card  border="primary" bg="dark" text ="light" className ="text-center" style={{  margin:"20px" }}>
                    <Card.Body>
                            <Card.Title tag="h5">Who we are</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md m-1" >
                    <Card border="primary" bg="dark" text ="light" className ="text-center" style={{  margin:"20px" }}>
                        <Card.Body>
                            <Card.Title tag="h5">Our Vision</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card border="primary" bg="dark" text ="light" className ="text-center" style={{  margin:"20px" }}>
                        <Card.Body>
                            <Card.Title tag="h5">Our Mission</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            <br />
        </div>
    )
}

export default About;
