import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login() {

const [email,setEmail] =useState('');
const [password,setPassword] =useState('');
const history=useHistory();

const formHandler =(e) =>{
    e.preventDefault();
    const n ={
        email,
        password
    }
    axios.post("https://jsonplaceholder.typicode.com/posts",n).then(res =>{
        //console.log(res);
        alert("Loged");
        history.push("/");
    }).catch(err=>{
        console.log(err);
      })
    
}
    return (
        <div className="form">
            <h2>LOGIN FORM</h2>
            <br/>
            <Form onSubmit={formHandler}> 
                <Form.Group >
                    <Form.Label  >Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group >
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Login;
