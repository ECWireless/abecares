import React from 'react'

export default function Contact() {
    return (
        <section className="container" id="contact">
            <form action="" className="form" id="contact__form">
                <h2 id="contact__header" className="h2">How can we help?</h2>
                <div id="contact__line" className="line" />
                <label htmlFor="form__input-name" id="contact__label-name" className="form__label">What is your Name?</label>
                <input type="text" id="contact__input-name" className="form__input"/>

                <label htmlFor="contact__input-email" id="contact__label-email" className="form__label">What is your Email?</label>
                <input type="text" id="contact__input-email" className="form__input"/>

                <label htmlFor="contact__input-number" id="contact__label-number" className="form__label">What is your Phone Number?</label>
                <input type="text" id="contact__input-number" className="form__input"/>

                <label htmlFor="contact__input-message" id="contact__label-message" className="form__label">Do you have any message for us?</label>
                <input type="text" id="contact__input-message" className="form__input"/>

                <button id="contact__button" className="button button__l">Send Your Message</button>
            </form>
        </section>
    )
}
