import React from 'react';
import {Navbar,Nav,Button,Jumbotron,Container} from 'react-bootstrap';
function Header(){
    return(
        <div className="header">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/home">Blog Page</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                
                </Nav>
                <Button href="/login" variant="outline-primary" style={{marginRight:"10px"}}>Add Post</Button>{' '}
                <Button href="/login" variant="outline-primary" style={{marginRight:"10px"}}>Login</Button>{' '}
            </Navbar>
            
        </div>

    );
}
export default Header;