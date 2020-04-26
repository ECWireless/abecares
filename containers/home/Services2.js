import React from 'react';

// Components
import ArrowButton from '../../components/ArrowButton';

export default function Services2() {
    return (
        <section className="container" id="services2">
            <p className="p-m" id="services2__subtitle">Our Services</p>
            <div className="line" id="services2__line" />
            <h2 className="h2" id="services2__header">Home Care</h2>
            <p className="p-m" id="services2__paragraph">Abraham Home Care offers a variety of different services aimed at meeting the needs of clients of all ages.</p>

            <div style={{backgroundImage: 'url(/home-care-photo-3.jpg)'}} id="services2__photo" />
            <div id="services2__background" />
            <div id="services2__left">
                <ArrowButton />
            </div>

            <div id="services2__right">
                <ArrowButton />
            </div>

            <div id="services2__container">
                <h3 className="h3" id="services2__sub-heading">Personal Assistance</h3>
                <div className="line line--white" id="services2__line" />
                <p className="p-s" id="services2__sub-paragraph">Standby Assistance with Morning and Evening Routines, Transfer Assistance, Bathing & Showering Assistance, Personal Hygiene Assistance, Help with Restroom Use, Assistance with Dressing, and Personal Appearance Care.</p>
                <button className="button button__m" id="services2__button">Learn More</button>
            </div>
        </section>
    )
}
