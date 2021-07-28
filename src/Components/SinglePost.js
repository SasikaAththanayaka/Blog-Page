import React from 'react'
import {Card} from 'react-bootstrap';
function SinglePost() {
    return (
        <div className="container">
            <Card style={{margin: '25px' ,height:"2%" }}>
            <Card.Img variant="top"  src='https://picsum.photos/200/300?random=1'  />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default SinglePost
