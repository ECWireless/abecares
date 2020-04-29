import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="container" id="hero">
            <div id="hero__white-bg" />
            <div id="hero__photo-container">
                {/* <img id="hero__photo" src="/home-care-photo-1.jpg" alt="Home Care Photo"/> */}
                <div style={{backgroundImage: 'url(/new-photo-1.jpeg)'}} id="hero__photo" alt="Home Care Hero Photo" />
            </div>

            <div id="hero__text-container">
                <div id="hero__subtitle-container">
                    <p className="p-m" id="hero__subtitle" style={{color: '#fff'}}>Home Care</p>
                    <div className="line" style={{borderBottom: '4px solid #fff'}} />
                </div>

                <h1 className="h1" style={{color: '#fff'}}>Your Need is Our Mission</h1>

                <p className="p-m" id="hero__paragraph">By choosing Abraham Home Care, you or your loved ones will have the ability to continue the comfortable and independent lifestyle you’re accustomed to by utilizing patient care at home.</p>
                    
                <div id="hero__buttons-container">
                    <Link href="/contact">
                        <button className="button button__l" id="hero__button">Book and Appointment</button>
                    </Link>
                    <a href="https://vimeo.com/386831702" target="_blank" rel="noopener noreferrer">
                        <button className="button button__l-alt" id="hero__button-alt">Play Video</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
