import React from 'react'
import {Button,Form} from 'react-bootstrap';
function Register() {
    return (
        <div className="form">
            <h2>Register FORM</h2>
            <br/>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
