import React from 'react';
import Logo from './logo.svg';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div>
                <div style={{boxShadow: '-2px -2px 10px black'}} className="d-flex justify-content-center bg-footer text-light">
                <div className="mt-5 d-flex d-flex-md-row flex-md-row flex-column justify-content-center align-items-center">
                    <div className="mx-3 mb-4 mb-md-0">
                        <ul className="p-0" style={{color: 'gray', listStyle: 'none'}}>
                                <li>
                                    <HashLink className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/#services"><span className="hov-link">Services</span></HashLink>
                                </li>

                                <li>
                                    <HashLink className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/#commitment"><span className="hov-link">Greet</span></HashLink>
                                </li>

                                <li>
                                    <HashLink className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/#faq"><span className="hov-link">FAQ</span></HashLink>
                                </li>
                            </ul>
                    </div>

                    <div className="mx-5 mb-4 mb-md-0">
                        <div className="d-flex justify-content-center align-items-center">
                            <img style={{borderRadius: '40px'}} height="38" width="38" src={Logo} alt="logo" />
                            <span className="ms-2 fs-5 brand">Clina</span>
                        </div>
                            <div className="foo mt-3 text-light d-flex justify-content-center">
                                <a target="_blank" href="https://www.facebook.com"><i className="mx-2 fa-brands fa-facebook-f"></i></a>
                                <a target="_blank" href="https://www.linkedin.com"><i className="mx-2 fa-brands fa-linkedin-in"></i></a>
                                <a target="_blank" href="https://twitter.com"><i className="mx-2 fa-brands fa-twitter"></i></a>
                                <a target="_blank" href="https://www.instagram.com"><i className="mx-2 fa-brands fa-instagram"></i></a>
                                <a target="_blank" href="https://www.youtube.com"><i className="mx-2 fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="mx-3">
                        <ul className="p-0" style={{color: 'gray', listStyle: 'none', textDecoration: 'none'}}>
                            <li>
                                <HashLink className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/about">
                                <span className="hov-link">About</span>
                                </HashLink>
                            </li>
                            <li>
                                <HashLink className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/contact">
                                <span className="hov-link">Contact</span>
                                </HashLink>        
                            </li>
                            <HashLink className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/login">
                                <span className="hov-link">Login</span>
                            </HashLink>   
                        </ul>
                    </div>
                </div>
            </div>


            <div className="bg-footer">
                <p className="text-secondary text-center pt-4 pb-3 my-0">All Rights Reserved &copy; <span className="brand">Clina</span></p>
            </div>
        </div>
    )
}

export default Footer;