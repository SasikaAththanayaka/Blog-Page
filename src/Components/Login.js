import React from 'react'
import {Button,Form} from 'react-bootstrap';
function Login() {
    return (
        <div className="form">
            <h2>LOGIN FORM</h2>
            <br/>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ padding:"10px" }} >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Login;
