import React from 'react'
import {Card,Button} from 'react-bootstrap';
function Post({da}) {
    
    return (
        <div >
            <Card bg="dark" text ="light" className ="text-center" style={{ width: '15rem' ,margin:"15px",padding:"1px" ,border:"30px"}}>
                <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300" />
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