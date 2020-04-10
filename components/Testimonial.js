import React from 'react'

export default function Testimonial() {
    return (
        <section className="container" id="testimonial">
            <div id="testimonial__text-container">
                <div id="hero__subtitle-container">
                        <p className="p-m" id="testimonial__subtitle">Why Us</p>
                        <div className="line" />
                    </div>

                    <h2 className="h2">"A very knowledgeable and compatible team, greatly improving the quality of my life."</h2>
                    <p className="p-s" id="testimonial__paragraph">- John Smith</p>
                </div>
            <div id="testimonial__photo-container">
                <img id="testimonial__photo" src="/home-care-photo-3.jpg" alt="Home Care Photo"/>
            </div>
        </section>
    )
}
