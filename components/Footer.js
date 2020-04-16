import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="container" id="footer">
            <div id="footer__learn-container">
                <h3 className="h3">Info</h3>
                <div className="line" id="footer__line" />
                <Link href="/about">
                    <p className="p-s" id="footer__link">About</p>
                </Link>
                <Link href="/services">
                    <p className="p-s" id="footer__link">Services</p>
                </Link>
                <Link href="/">
                    <p className="p-s" id="footer__link">Application</p>
                </Link>
            </div>

            <div id="footer__contact-container">
                <h3 className="h3">Contact Us</h3>
                <div className="line" id="footer__line" />
                <a href="mailto: info@abecares.com" className="p-s" id="footer__link">info@abecares.com</a>
                <a
                    href="https://goo.gl/maps/dqXN59YFxHDnSEpF9"
                    target="_blank"
                    className="p-s" id="footer__link"
                >
                    6611 Wilkins Avenue, Pittsburgh PA 15217 US
                </a>
            </div>

            <div id="footer__book-container">
                <h3 className="h3">Book an Appointment</h3>
                <div className="line" id="footer__line" />
                <p className="p-s" id="footer__paragraph">We respond within 24 hours!</p>
                <a href="tel: 4123203696">
                    <button className="button button__l" id="footer__button">(412) 320-3696</button>
                </a>
            </div>
        </footer>
    )
}
