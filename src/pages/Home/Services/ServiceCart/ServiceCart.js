import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCart = (props) => {
    console.log(props.cart);
    const {id, img, title, description} = props.cart;
    return (
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Card style={{ width: '15rem' }}>
                <Card.Img style={{height: '130px'}} variant="top" src={img} />
                <Card.Body>
                <Card.Title className="mt-1 mb-4">{title}</Card.Title>
                <Card.Text style={{height: '120px'}}>
                    {description}
                </Card.Text>
                <div className="d-flex justify-content-center mb-4">
                    <Link to={`/book/${id}`}> <Button variant="success">Book</Button> </Link>
                </div>
                </Card.Body>
            </Card>
            </Col>
    )
}

export default ServiceCart;