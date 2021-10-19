import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Home/Home/Home.css';

const Banner = () => {
    return (
        <div>
            <div>
                <div style={{ background:`radial-gradient(transparent, black), url('./images/banner/1.jpg') no-repeat top center fixed`, backgroundSize:'cover', height:"577px", backgroundBlendMode: 'saturation' }}>
                    <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="pt-5 text-center d-flex justify-content-center align-items-center">
                        <div className="w-50 mt-5 px-4 py-3 text-light">
                            <p style={{color:"#9b9faa"}} className="text-uppercase">You are Important, We care for You</p>
                            <h1 className="mb-4">Welcome to <span className="brand">Clina</span></h1>
                            <p className="pt-3">Having issues with your mind? We are here as your home psychiatric counselor. Don't feel ashamed to be healed.</p>
                            <Link style={{color: 'unset', textDecoration: 'unset'}} to="/services"><Button className="brand-bg default-btn shadow-lg mt-4 mb-4 border-0 rounded" variant="light">Explore</Button></Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;