import React from 'react'
import { useParams } from 'react-router-dom';
import Api from '../API/Api';
function SinglePost() {
    const {id} =useParams();
    const {data} =Api(`https://jsonplaceholder.typicode.com/posts/`+ id);
    console.log(id);
    if(!data){
        return "loading................"
    }
    return (
        <div className="container">
            <div className="singlepost">
            <img className="singleImg" src="https://picsum.photos/400" alt=""/>
            <br/>
            <br/>
            <div className="header-text" >{data.title}</div>
            <br/>
            <p>Written By:{data.id}</p>
            <br/>
            <p>{data.body}</p>
        </div>
        </div>
    )
}

export default SinglePost
