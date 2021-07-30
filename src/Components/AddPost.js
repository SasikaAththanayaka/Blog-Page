import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
function AddPost() {
    const [title,setTitle] =useState("");
    const [writer,setWriter] =useState('');
    const [content,setContent] =useState('');
    const history=useHistory();
    const addPost =(e) =>{
        e.preventDefault();
        const n ={
            title,
            writer,
            content
        }
        
        axios.post("https://jsonplaceholder.typicode.com/posts",n).then(res =>{
            //console.log(res);
            alert("Added");
            history.push("/");
        }).catch(err=>{
            console.log(err);
          })
    }
    return (
        <div className="form">
            <h2>Add Post</h2>
            <br/>
            <Form onSubmit={addPost}>
                <Form.Group className="mb-3" >
                    <Form.Label>Add Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Add Writer</Form.Label>
                    <Form.Control type="text" placeholder="Enter Writer" value={writer} onChange={(e) => setWriter(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Add Content</Form.Label>
                    <Form.Control type="text" placeholder="Enter Content" value={content} onChange={(e) => setContent(e.target.value)}/>
                </Form.Group>
                <Form.Group className="position-relative mb-3">
                    <Form.Label>File</Form.Label>
                    <Form.Control
                    type="file"
                    required
                    name="file"
                    //onChange={handleChange}
                    //isInvalid={!!errors.file}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                    
                    </Form.Control.Feedback>
                </Form.Group>
                    <Button variant="outline-primary" type="submit"> Publish</Button>
            </Form>
        </div>
    )
}

export default AddPost
