import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
        <section className="container" id="about">
            <div id="about__text-container">
                <div id="hero__subtitle-container">
                        <p className="p-m" id="about__subtitle">About Us</p>
                        <div className="line" style={{borderBottom: '4px solid #fff'}} />
                    </div>

                    <h2 className="h2" style={{color: '#fff'}}>Thorough in knowledge, diverse in practice</h2>
                    <p className="p-s" id="about__paragraph">Abraham Home Care was founded in 2014 by owner Dwayne Jordan, who felt compelled to start his own business following an accident that left his 17-year-old nephew a quadripliegic. After a year of recuperating at the Children's Institute of Pittsburgh, his nephew was eventually sent home, where he was required 24-hour care. Dwayne noticed right away the effect of qualified, trustworthy, and compassionate home health aides on his nephew/s recovery. This experience inspired him to help others to receive similar quality home care and manage their day-to-day living with dignity and respect.</p>
                    <p style={{marginTop: '3rem'}} className="p-s" id="about__paragraph">Currently, Abraham Home Care provides services to 30 patients and employs a team of over 50 direct care workers.</p>
                    <Link href="/about">
                        <button className="button button__m" id="about__button">Learn More</button>
                    </Link>
                </div>
            <div id="about__photo-container">
                {/* <img id="about__photo" src="/home-care-photo-2.jpg" alt="Home Care Photo"/> */}
                {/* <div style={{backgroundImage: 'url(/home-care-photo-2.jpg)'}} id="about__photo" alt="About Photo" /> */}
                <video id="about__video" poster="/home-care-photo-2.jpg" autoPlay loop muted playsInline>
                    <source src="./AboutVideo.mp4" type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}
