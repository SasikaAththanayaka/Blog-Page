import axios from 'axios';
import React from 'react'
import { useContext ,useRef} from 'react';
//import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';
import { Context } from '../Context/Context';

function Login() {

const userRef = useRef()
const passwordRef=useRef();
const {dispatch,isFetching} =useContext(Context);
//const history=useHistory();

const formHandler =(e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
        const res = axios.post("https://jsonplaceholder.typicode.com/posts",{
            username:userRef.current.value,
            password:passwordRef.current.value,
        })
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }
    catch(err){
        dispatch({type:"LOGIN_FAILURE"});
    }
    
};
    return (
        <div className="form">
            <h2>LOGIN FORM</h2>
            <br/>
            <Form onSubmit={formHandler}> 
                <Form.Group >
                    <Form.Label  >Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" ref={userRef} />
                    <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  ref={passwordRef} />
                </Form.Group>
                <Form.Group >
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isFetching}>Submit</Button>
            </Form>
        </div>
    )
}

export default Login;
