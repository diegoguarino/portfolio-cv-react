import {Container, Row, Col} from "react-bootstrap";
import React, {useState} from 'react';
import image1 from '../assets/img/crm-parcial.png';
import image2 from '../assets/img/citas-parcial.png';
import image3 from '../assets/img/cotizado.png';
import image4 from '../assets/img/gastos-intermedio.png';
import image5 from '../assets/img/gastos-bebidas.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import headerImg from "../assets/img/avtarprojects.png";



export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1280, min: 464 },
            items: 1
        },
        medium:{
            breakpoint:{max: 780, min: 400},
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="Projects" id="projects">
            <Row>
                <Col col={12} xl={5} md={4} > 
                    <h5></h5>
                </Col>   
                 <Col col={12} xl={4} md={6} >   
                    <img src={headerImg}  width={250} height={400} alt="Header image"/>
                </Col>
            </Row>
                <div className="projects">
                    <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>CRM - React</p>
                                    <img src={image1} alt="Pokedex project icon"/>
                                    <div className="technologies">
                                        <h6>Tecnologías:</h6>
                                        <p>
                                            React Router DOM, JSON Server - Loader, Action
                                        </p>
                                        <div className="icons">
                                            <a href="https://crm-react-diegoguarinodev.netlify.app/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="https://github.com/diegoguarino/crm-React" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards card align-items-center m-auto">
                                        <p>CRIPTOS - React</p>
                                        <img src={image3} className="djangoimg" alt="Django project icon"/>
                                        <div className="technologies">
                                            <h6>Tecnologías:</h6>
                                            <p>
                                                React, API - Styled Components, Custom Hooks
                                            </p>
                                            <div className="icons">
                                                <a href="https://criptos-react-diegoguarinodev.netlify.app/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                                <a href="https://github.com/diegoguarino/criptos-React" target="_blank"><i className='bx bxl-github'></i></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>CITAS - React</p>
                                    <img src={image2} alt="Frontrend project"/>
                                    <div className="technologies colin">
                                        <h6>Tecnologías:</h6>
                                        <p>
                                            React JS, Vite TailwindCSS - Hooks, Events
                                        </p>
                                        <div className="icons">
                                            <a href="https://citas-react-diegoguarinodev.netlify.app/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="https://github.com/diegoguarino/citas-React" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>GASTOS - React</p>
                                    <img src={image4} alt="Frontrend project"/>
                                    <div className="technologies colin">
                                        <h6>Tecnologías:</h6>
                                        <p>
                                            React JS, Vite - LocalStorage, Modal, Swipe 
                                        </p>
                                        <div className="icons">
                                            <a href="https://control-gastos-diegoguarinodev.netlify.app/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="https://github.com/diegoguarino/control-gastos-React" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>BEBIDAS - React</p>
                                    <img src={image5} alt="Frontrend project"/>
                                    <div className="technologies colin">
                                        <h6>Tecnologías:</h6>
                                        <p>
                                            React JS, React-Bootstrap - Context, API
                                        </p>
                                        <div className="icons">
                                            <a href="https://buscador-bebidas-diegoguarinodev.netlify.app/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="https://github.com/diegoguarino/buscador-bebidas-React" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Carousel>
                </div>
        </section>


    )
}
