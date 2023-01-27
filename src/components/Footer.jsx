import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/twitter.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">DGDev</h1>
                 <ul className="footer_list">
                        <li>
                            <a href="#home" className="footer_link">Sobre mí</a>
                        </li>
                        <li>
                            <a href="#technicallevels" className="footer_link">Tecnologías</a>
                        </li>
                        <li>
                            <a href="#projects" className="footer_link">Proyectos</a>
                        </li>
                    </ul>
                <div className="footer_social">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/noelia-fern%C3%A1ndez-l%C3%B3pez-659818215" target="_blank"><img src={navIcon1} alt="LinkedIn icon" /></a>
                        <a href="https://twitter.com/KaiIsVenom" target="_blank"><img src={navIcon2} alt="Twitter icon" /></a>
                        <a href="https://www.tiktok.com/@ohmycode_?_t=8XI4TI02Z6L&_r=1" target="_blank"><img src={navIcon3} alt="Tiktok icon" /></a>
                    </div>
                </div>
                <span className="footer_copy">&#169; DGDev. All rights reserved.</span>
            </div>
        </footer>
    )
}
