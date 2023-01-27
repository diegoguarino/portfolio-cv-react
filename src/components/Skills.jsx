import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export  const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
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
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                       <div className="skill-bx">
                           <h2>
                               Algo sobre Mí!
                           </h2>
                           <p>Mi nombre es Diego y tengo pasión por la tecnología, desde la ingeniería de software hasta las aplicaciones del lado del cliente.
                                Empecé como autodidacta, actualmente voy por mi tercer curso de Programación. Al principio me llamo la antención todo lo relacionado con Backend, 
                                pero con el tiempo le fui tomando cariño al Frontend por lo que hoy le dedico mi tiempo de lleno a él. 
                                Mi interés por el diseño web, lenguajes de programación y las diferentes herramientas con las que hoy en día disponemos para desarrollarnos,
                                me han llevado a sumergirme en diversos viajes, habitualmente los llamamos proyectos. 
                                En la sección de proyectos están algunos de los trabajos que he desarrollado hasta el momento.</p>
                           <Carousel responsive={responsive} infinite={true} className="skill-slider">
                               <div className="item">
                                   <i className="uil uil-arrow-up"></i>
                                   <h5>Auto-Motivacion</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-ear"></i>
                                   <h5>Escucha activa</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-balance-scale"></i>
                                   <h5>Ética de trabajo</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-presentation-edit"></i>
                                   <h5>Dedicación</h5>
                               </div>
                           </Carousel>
                       </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
