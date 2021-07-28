import React from 'react'
import {Card,Button} from 'react-bootstrap';
function Post({da}) {
    console.log(da);
    return (
        <div >
            <Card style={{ width: '15rem' ,margin:"10px",padding:"10px" }}>
                <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300" />
                <Card.Body>
                    <Card.Title>{da.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Write By:{da.userId}</Card.Subtitle>
                    <Card.Text>{da.body}</Card.Text>
                    <Button variant="outline-primary"><Card.Link href="/SinglePost">Read More</Card.Link></Button>{' '}      
                </Card.Body>          
            </Card>
                
        
        </div>
    )
}

export default Post;