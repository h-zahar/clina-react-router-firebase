import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const {bookId} = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`/data-json/single-services/${bookId}.json`)
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div>
            <div style={{ background:`radial-gradient(transparent, black), url('/images/banner/1.jpg') no-repeat top center fixed`, backgroundSize:'cover', height:"181px", backgroundBlendMode: 'saturation' }}>
            <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="text-center d-flex justify-content-center align-items-center">
            <div className="w-50 px-4 py-3 text-light"><h1>{service.title}</h1></div>
            </div>
            </div>
            <Container className="d-flex justify-content-center">
                <div className="w-50">
                    <img className="w-100 mb-4" src={service.img} alt="" />
                    <p className="text-center mb-5">{service.description}</p>
                    <div className="d-flex justify-content-center mb-5"><Button variant="success">Order Now</Button></div>
                </div>
            </Container>
        </div>
    )
}

export default Booking;