import React from 'react';
import Link from 'next/link';

export default function Services() {
    return (
        <section className="container" id="services">
            <p className="p-m" id="services__subtitle">Our Services</p>
            <div className="line" id="services__line" />
            <h2 className="h2" id="services__header">Home Care</h2>
            <p className="p-m" id="services__paragraph">Abraham Home Care offers a variety of different services aimed at meeting the needs of clients of all ages.</p>
            <div id="services__service1-container">
                <div id="services__service-bg" />
                <h4 className="h4" id="services__service-header">Personal Assistance</h4>
                {/* <img src="/service1.jpeg" id="services__service-photo" alt=""/> */}
                <div style={{backgroundImage: 'url(/service1.jpeg)'}} id="services__service-photo" alt="Service Photo 1" />
                <Link href="/services">
                    <button className="button button__m" id="services__service-button">Learn More</button>
                </Link>
            </div>
            <div id="services__service2-container">
                <div id="services__service-bg-variant" />
                <h4 className="h4" id="services__service-header">Specialized Care</h4>
                {/* <img src="/service2.png" id="services__service-photo" alt=""/> */}
                <div style={{backgroundImage: 'url(/service2.png)'}} id="services__service-photo" alt="Service Photo 2" />
                <Link href="/services">
                    <button className="button button__m" id="services__service-button">Learn More</button>
                </Link>
            </div>
            <div id="services__service3-container">
                <div id="services__service-bg" />
                <h4 className="h4" id="services__service-header">Companionship</h4>
                {/* <img src="/service3.jpeg" id="services__service-photo" alt=""/> */}
                <div style={{backgroundImage: 'url(/service3.jpeg)'}} id="services__service-photo" alt="Service Photo 3" />
                <Link href="/services">
                    <button className="button button__m" id="services__service-button">Learn More</button>
                </Link>
            </div>
        </section>
    )
}
