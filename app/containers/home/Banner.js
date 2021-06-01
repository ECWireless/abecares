import React from 'react';
import ArrowButton from '../../components/ArrowButton';

export default function Banner(props) {
    return (
        <section className="container" id="banner">
            <div id="banner__background" />

            <div className="banner__text-container banner__text-container--1">
                <h3 className="h3" id="banner__header">Contact Us</h3>
                <div className="line" id="banner__line" />
                <a href="tel: 4126679955" id="banner__link" className="p-s">412.677.9955</a>
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
                    5817 Penn Ave, Pittsburgh, PA 15206
                </a>
            </div>

            <div className="banner__text-container banner__text-container--3">
                <h3 className="h3" id="banner__header">Services</h3>
                <div className="line" id="banner__line" />
                <p className="p-s" id="banner__paragraph" onClick={props.scrollToLocation.bind(this, 'services')}>Personal Assistance</p>
                <p style={{marginTop: '1rem'}} className="p-s" id="banner__paragraph" onClick={props.scrollToLocation.bind(this, 'services')}>Specialized Care</p>
                <p style={{marginTop: '1rem'}} className="p-s" id="banner__paragraph" onClick={props.scrollToLocation.bind(this, 'services')}>Companionship</p>
            </div>
            <div id="banner__button" onClick={props.scrollToLocation.bind(this, 'about')}>
                <ArrowButton />
            </div>
        </section>
    )
}
