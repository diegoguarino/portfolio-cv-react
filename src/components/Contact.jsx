import {Col, Row} from "react-bootstrap";
import headerImg from "../assets/img/avatarcontact.png";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Display } from 'react-bootstrap-icons';


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b7pcbha', 'template_6wad6wq', form.current, 'xYW3NstznYrhhcg5K')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        
        <section className="contact-section"id="Contact">
            
                <Row>
                    <Col col={12} xl={5} md={4} > 
                        <h5></h5>
                    </Col>   
                    <Col col={12} xl={4} md={6} >   
                        <img src={headerImg}  width={200} height={250} alt="Header image"/>

                    </Col>
                </Row>    
            <div className="contact_container grid">
                <div className="contact_content">
                    <div className="contact_info">
                        <div className="container-contact">
                            <div className="contact_content mb-3">
                                <h3 className="contact_title">Contáctame</h3>
                                <div className="contact_card">
                                    <div className="header-card">
                                        <i className='bx bx-mail-send'></i>
                                        <h3 className="contact_card-title">Email</h3>
                                    </div>
                                    <span className="contact_card-data">diegoguarino.dev@gmail.com</span>
                                    <a href="mailto:diegoguarino.dev@gmail.com" className="contact_button">Escríbeme ahora<i className='bx bx-right-arrow-alt contact_button-icon'></i></a>
                                </div>
                                <div className="contact_card">
                                    <div className="header-card">
                                        <i className='bx bxl-linkedin-square'></i>
                                        <h3 className="contact_card-title">LinkedIn</h3>
                                    </div>
                                    <span className="contact_card-data">Diego Guarino</span>
                                    <a href="https://www.linkedin.com/in/diego-guarino-018667252/" target="_blank" className="contact_button">Escríbeme ahora<i className='bx bx-right-arrow-alt contact_button-icon'></i></a>
                                </div>
                                </div>
                            <div className="contact_content">
                                <h3 className="contact_title">Escríbeme sobre tu proyecto</h3>
                                <form ref={form} onSubmit={sendEmail} className="contact_form">
                                    <div className="contact_form-div">
                                        <label className="contact_form-tag">Nombre</label>
                                        <input type="name" className="form-control" placeholder="Nombre y apellido" name ="name" required/>
                                        <div className="mb-3">
                                            <label className="form-label">Correo
                                                </label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="E-mail" name="email" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Mensaje</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                                      rows="3" placeholder="Escribe aquí tu mensaje..." name="message" required></textarea>
                                        </div>
                                        <button className="send download">Enviar mensaje<i className='bx bx-envelope'></i></button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
          </div>

        </section>
        
    )

}