import style from './Contact.module.css'
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);



    return(
        <div className={style.container} id="contact">
            <p className={style.contactMe} data-aos="fade-right" data-aos-duration="800" id='about'>CONTACT ME</p>
            <div className={style.box} data-aos="fade-up" data-aos-duration="800">
                <div className={style.caja}>
                    <div className={style.imgAbout}>
                                <img src="./about.png" alt="imagen mia" />
                    </div>
                    <p>
                        Please send me an email to schedule a meeting. I am currently available. Open to hearing your proposal.
                    </p>
                </div>
                <div className={style.redes}>
                        <nav>
                            <ul>
                                <li><a target="_blank" href='mailto:mati.dehoyosmdp@gmail.com'><FaEnvelope className={style.icon}/>mati.dehoyosmdp@gmail.com</a></li>
                                <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' target='_blank'><FaLinkedin className={style.icon}/>LinkedIn</a></li>
                                <li><a href='https://github.com/matidehoyos' target='_blank'><AiFillGithub className={style.icon}/>GitHub</a></li>
                                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=542236351363"><FaWhatsapp className={style.icon}/>WhatsApp</a></li>
                            </ul>
                        </nav>
                </div>
            </div>
        </div>
    )
}

export default Contact;