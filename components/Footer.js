import React from 'react'

export default function Footer() {
    return (
        <footer className="container" id="footer">
            <div id="footer__learn-container">
                <h3 className="h3">Info</h3>
                <div className="line" id="footer__line" />
                <p className="p-s" id="footer__link">About</p>
                <p className="p-s" id="footer__link">Services</p>
                <p className="p-s" id="footer__link">Application</p>
            </div>

            <div id="footer__contact-container">
                <h3 className="h3">Contact Us</h3>
                <div className="line" id="footer__line" />
                <p className="p-s" id="footer__link">(412) 320-3696</p>
                <p className="p-s" id="footer__link">6611 Wilkins Avenue, Pittsburgh PA 15217 US</p>
            </div>

            <div id="footer__book-container">
                <h3 className="h3">Book an Appointment</h3>
                <div className="line" id="footer__line" />
                <p className="p-s" id="footer__paragraph">We respond within 24 hours!</p>
                <button className="button" id="footer__button">(412) 320-3696</button>
            </div>
        </footer>
    )
}
