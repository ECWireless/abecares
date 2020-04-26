import React from 'react';
import ArrowButton from '../../components/ArrowButton';

export default function Banner(props) {
    return (
        <section className="container" id="banner">
            <div id="banner__background" />

            <div className="banner__text-container banner__text-container--1">
                <h3 className="h3" id="banner__header">Contact Us</h3>
                <div className="line" id="banner__line" />
                <a href="tel: 4123203696" id="banner__link" className="p-s">(412) 320-3696</a>
                <a href="mailto: info@abecares.com" className="p-s" id="banner__paragraph">info@abecares.com</a>
            </div>

            <div className="banner__text-container banner__text-container--2">
                <h3 className="h3" id="banner__header">Visit Us</h3>
                <div className="line" id="banner__line" />
                <a
                    href="https://goo.gl/maps/dqXN59YFxHDnSEpF9"
                    target="_blank"
                    className="p-s" id="banner__link"
                >
                    6611 Wilkins Avenue Pittsburgh PA 15217 US
                </a>
            </div>

            <div className="banner__text-container banner__text-container--3">
                <h3 className="h3" id="banner__header">Services</h3>
                <div className="line" id="banner__line" />
                <p className="p-s">Personal Assistance</p>
                <p className="p-s" id="banner__paragraph">Specialized Care</p>
                <p className="p-s" id="banner__paragraph">Companionship</p>
            </div>
            <div id="banner__button" onClick={props.scrollToLocation}>
                <ArrowButton scrollToLocation={props.scrollToLocation} />
            </div>
        </section>
    )
}
