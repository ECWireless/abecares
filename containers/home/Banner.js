import React from 'react'

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
            <div id="banner__arrow-container" onClick={props.scrollToLocation}>
                <svg version="1.1" id="banner__arrow" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 451.847 451.847">
                    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                </svg>
            </div>
        </section>
    )
}
