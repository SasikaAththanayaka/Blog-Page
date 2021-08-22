import React from 'react';
//import { useState , useEffect} from 'react';
import { useContext } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import { Context } from '../Context/Context';

function Header(){
    
    const {user}=useContext(Context);
    //const [admin,setAdmin]=useState();
   /* useEffect(()=>{
        setAdmin(user);
    },[user]);*/
    return(
        <div className="header">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/home">Blog Page</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                
                </Nav>
                { user ? (<Button href="/AddPost" variant="outline-primary" style={{marginRight:"10px"}}>Add Post</Button>)
                : (<> <Button href="/Register" variant="outline-primary" style={{marginRight:"10px"}}>Register</Button>{' '}
                <Button href="/login" variant="outline-primary" style={{marginRight:"10px"}}>Login</Button>{' '}</>)}
                
                
            </Navbar>
            
        </div>

    );
}
export default Header;