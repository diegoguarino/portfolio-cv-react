import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/avatartechnical.png";
import CV from "../CV/CV.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('')
    const toRotate = ["Junior Developer."];
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect (() => {
        let ticker =setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner mt-0" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{"Hola soy Diego,   "}<span className="wrap">{text}</span> </h1>
                        <p>Soy un Junior Developer centrado en la creación de sitios web y aplicaciones que conducen al éxito del producto en general.</p>
                        <div className="buttons">
                            <button className="download"><a download="DiegoG-CV-Esp" href={CV}>Descarga mi CV (Esp)</a></button>
                            <button onClick={()=> console.log('connect')}><a href="#Contact">Contáctame!<ArrowRightCircle size={25} /></a></button>
                        </div>
                     </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} width={320} height={450} alt="Header image"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}