import React from 'react';
import Link from 'next/link'

export default function Footer(props) {
    return (
        <footer className="container" id="footer">
            <div id="footer__learn-container">
                <h3 className="h3">Info</h3>
                <div className="line" id="footer__line" />
                <p className="p-s" id="footer__link" onClick={props.scrollToLocation.bind(this, 'about')}>About</p>
                <p className="p-s" id="footer__link" onClick={props.scrollToLocation.bind(this, 'services')}>Services</p>
                {/* <Link href="/application">
                    <p className="p-s" id="footer__link">Application</p>
                </Link> */}
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
                    5817 Penn Ave, Pittsburgh, PA 15206
                </a>
            </div>

            <div id="footer__book-container">
                <h3 className="h3">Book an Appointment</h3>
                <div className="line" id="footer__line" />
                <p className="p-s" id="footer__paragraph">We respond within 24 hours!</p>
                <a href="tel: 4126679955">
                    <button className="button button__l" id="footer__button">412.667.9955</button>
                </a>
            </div>
        </footer>
    )
}
