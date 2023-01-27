import { Col, Row } from "react-bootstrap";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";
import headerImg from "../assets/img/avatarban.png";


export const Languages = () => {
    return(
        <section className="languages section  mt-5 mb-5" id="technicallevels">
            <div>   
                
            </div>    
            <div className="languages_container container">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
};





