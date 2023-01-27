import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/sellodg.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/twitter.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import React from "react";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
            
        }
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);

    })

    const onUpdateActiveLink = (value => {
        setActiveLink(value);
    })
    return (
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" width={100} height={100}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Sobri mí</Nav.Link>
                            <Nav.Link href="#technicallevels" className={activeLink === 'languages' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('languages')}>Nivel Técnico</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                            <Nav.Link href="#Contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contacto</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                         <div className="social-icon">
                            <a href="https://www.linkedin.com/in/diego-guarino-018667252/" target="_blank"><img src={navIcon1} alt="LinkedIn icon" /></a>
                            <a href="https://twitter.com/DiegoGuarinoDev" target="_blank"><img src={navIcon2} alt="Twitter icon" /></a>
                            <a href="https://www.tiktok.com/@diegoguarino.dev" target="_blank"><img src={navIcon3} alt="Tiktok icon" /></a>
                         </div>

                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}






