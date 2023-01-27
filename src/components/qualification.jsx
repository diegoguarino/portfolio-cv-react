import { Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import headerImg from "../assets/img/avatarban.png";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <section className="qualification section" id="qualification">
            <Row>
                <Col col={12} xl={5} md={4} > 
                    <h5></h5>
                </Col>   
                 <Col col={12} xl={4} md={6} >   
                    <img src={headerImg}  width={200} height={250} alt="Header image"/>

                </Col>
            </Row>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button-flex" : "qualification_button button--flex" }  onClick={() => toggleTab(2)}>
                        <i className="uil uil-graduation-cap qualification_icon"> </i>
                        Experiencia
                    </div>
                        <div className={toggleState === 2 ? "qualification_button qualification_active button-flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                            <i className="uil uil-briefcase-alt qualification_icon"> </i>
                            Education
                        </div>
                </div>
                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active": "qualification_content"}>
                        
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Programación Web Full Stack</h3>
                                <span className="qualification_subtitle">DePC Suite</span>    
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>May - Oct 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title"> JavaScript + React + Hooks </h3>
                                <span className="qualification_subtitle">Código Con Juan - Juan Pablo De la torre Valdez</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>Oct 2022 - presente
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">React JS Intermedio</h3>
                                <span className="qualification_subtitle">Open Bootcamp</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>Dic 2022 - presente
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active": "qualification_content"}>
                           <div className="qualification_data">
                               <div>
                                    <h3 className="qualification_title">Gerente Comercial</h3>
                                    <span className="qualification_subtitle">Autoservice y minimercado</span>
                                    <div className="qualification_calendar">
                                       <i className="uil uil-calendar-alt"></i>2008 - 2022
                                    </div>
                               </div>
                                <div>
                                     <span className="qualification_rounder"></span>
                                     <span className="qualification_line"></span>
                                </div>
                           </div>
                    </div>

                </div>
            </div>
        </section>
    )
}