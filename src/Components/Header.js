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
                <Button href="/login">Login</Button>
            </Navbar>
            <Jumbotron fluid>
                <Container bg="dark" variant="dark">
                    <h1>Blog-Page</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>

    );
}
export default Header;