import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
function Register() {
    const [fName,setFName]=useState("");
    const [lName,setLName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();

    const register =(e) =>{
        e.preventDefault();
        const n={
            fName,
            lName,
            email,
            password
        };
        axios.post("https://jsonplaceholder.typicode.com/posts",n).then(res =>{
        //console.log(res);
        alert("Registered");
        history.push("/");
    }).catch(err=>{
        console.log(err);
      })
    }
    return (
        <div className="form">
            <h2>Register FORM</h2>
            <br/>
            <Form onSubmit={register}>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"  value={fName} onChange={(e)=>setFName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" value={lName} onChange={(e)=>setLName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                    <Button variant="outline-primary" type="submit"> Register</Button>
            </Form>
        </div>
    )
}

export default Register;
