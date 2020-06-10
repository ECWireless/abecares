import React from 'react';
import Link from 'next/link';

export default function Hero(props) {
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

                <p className="p-m" id="hero__paragraph">Abraham Home Care isn't just a home health agency. We're a family of dedicated home health workers who want to ensure that you continue to lead an independent and comfortable lifestyle while providing you with top-rated patient care.</p>
                    
                <div id="hero__buttons-container">
                    <Link href="/contact">
                        <button className="button button__l" id="hero__button">Book and Appointment</button>
                    </Link>
                    <div onClick={props.onModalToggle}>
                        <button className="button button__l-alt" id="hero__button-alt">Play Video</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
