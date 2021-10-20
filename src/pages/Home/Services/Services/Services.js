import React, { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('./data-json/services.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    }, []);

    return (
        <div id="services">
            <div style={{paddingBottom: '150px'}} className="bg-semilight pt-5">
                <h2 className="text-title my-5 text-center">Our Services</h2>
                <div>
                    <div>
                        <Container>
                            <Row className="gy-4 justify-content-md-center">
                                    {
                                        carts.map(cart => {
                                            return <ServiceCart key={cart.id} cart={cart} />
                                        })
                                    }
                            </Row>
                        </Container>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;