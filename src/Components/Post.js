import React from 'react'
import {Card,Button} from 'react-bootstrap';
function Post({da}) {
    
    return (
        <div classNama="s">
            <Card bg="dark" text ="light" className ="text-center" style={{ width: '21rem' ,margin:"15px" ,border:"50px"}}>
                <Card.Img className="cardImg" variant="top" src="https://picsum.photos/seed/picsum/200/300" />
                <Card.Body>
                    <Card.Title>{da.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Write By:{da.userId}</Card.Subtitle>
                    <Button variant="outline-primary"><Card.Link href={`/SinglePost/${da.id}`} >Read More</Card.Link></Button>{' '}      
                </Card.Body>          
            </Card>
                
        
        </div>
    )
}

export default Post;