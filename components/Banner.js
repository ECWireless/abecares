import React from 'react'

export default function Banner() {
    return (
        <section className="container-main" id="banner">
            <div id="banner__background" />

            <div className="banner__text-container banner__text-container--1">
                <h3 className="h3" id="banner__header">Contact Us</h3>
                <p className="p-s">(412) 320-3696</p>
                <p className="p-s" id="banner__paragraph">info@abecares.com</p>
            </div>

            <div className="banner__text-container banner__text-container--2">
                <h3 className="h3" id="banner__header">Visit Us</h3>
                <p className="p-s">6611 Wilkins Avenue</p>
                <p className="p-s" id="banner__paragraph">Pittsburgh PA 15217 US</p>
            </div>

            <div className="banner__text-container banner__text-container--3">
                <h3 className="h3" id="banner__header">Services</h3>
                <p className="p-s">Personal Assistance</p>
                <p className="p-s" id="banner__paragraph">Specialized Care</p>
                <p className="p-s" id="banner__paragraph">Companionship</p>
            </div>
            <div id="banner__arrow-container">
            <svg version="1.1" id="banner__arrow" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 451.847 451.847">
                <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
            </svg>
            </div>
        </section>
    )
}
