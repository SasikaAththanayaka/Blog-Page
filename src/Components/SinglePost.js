import React from 'react'
import {Card,CardColumns,Figure} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Api from '../API/Api';
function SinglePost() {
    const {id} =useParams();
    const {data} =Api(`https://jsonplaceholder.typicode.com/posts/`+ id);
    console.log(id);
    return (
        <div className="container">
            <div className="singlepost">
            <img src="https://picsum.photos/400"/>
            <br/>
            <div className="header-text" >{data.title}</div>
            <br/>
            <p>{data.body}</p>
        </div>
        </div>
    )
}

export default SinglePost
