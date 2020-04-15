import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="section" id="hero">
            <div className="container">
                <div id="hero__white-bg" />
                <div id="hero__photo-container">
                    {/* <img id="hero__photo" src="/home-care-photo-1.jpg" alt="Home Care Photo"/> */}
                    <div style={{backgroundImage: 'url(/home-care-photo-1.jpg)'}} id="hero__photo" alt="Home Care Hero Photo" />
                </div>

                <div id="hero__text-container">
                    <div id="hero__subtitle-container">
                        <p className="p-m" id="hero__subtitle">Home Care</p>
                        <div className="line" />
                    </div>

                    <h1 className="h1">Your Need is Our Mission</h1>
                    <p className="p-m" id="hero__paragraph">By choosing Abraham Home Care, you or your loved ones will have the ability to continue the comfortable and independent lifestyle you’re accustomed to by utilizing patient care at home.</p>
                    <Link href="/contact">
                        <button className="button button__l" id="hero__button">Book and Appointment</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
