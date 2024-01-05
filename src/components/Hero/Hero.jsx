import React from 'react';
import './Hero.scss';
import { FaGithub, FaLinkedin, FaWhatsapp, FaKaggle } from "react-icons/fa";

function Hero() {
    return (
        <div className='hero-container'>
            
            <div className='hero-cape'>

                <div className='text-area'>
                    <span>Hello! I am <span className='destaque'>Jovi</span> and i hope you're okay!</span>
                    <span>This is my <span className='destaque'>Portfólio</span> of projects, ideas and works.</span>
                    <span>The objective of this page is to showcase</span>
                    <span>my <span className='destaque'>skills, projects, plans and experiences!</span></span>
                    <span>If you like a project or would like to <span className='destaque'>talk to me</span>, get in touch below.</span>
                </div>

                <div className='social-area'>
                    <FaGithub className='social-icon Github'/>
                    <FaLinkedin className='social-icon Linkedin'/>
                    <FaWhatsapp className='social-icon Whatsapp'/>
                    <FaKaggle className='social-icon Kaggle'/>
                </div>

                <span className='signature'>Developed for @Archs </span>
                <span className="signature">"Who would think of attacking the gods of death?"</span>

            </div>

        </div>
    )
}

export default Hero