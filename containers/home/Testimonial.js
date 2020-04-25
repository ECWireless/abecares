import React from 'react'

export default function Testimonial() {
    return (
        <section className="container" id="testimonial">
            <div id="testimonial__text-container">
                <div id="hero__subtitle-container">
                        <p className="p-m" id="testimonial__subtitle">Why Us</p>
                        <div className="line" style={{borderBottom: '4px solid #fff'}} />
                    </div>

                    <h3 className="h3" style={{color: '#fff'}}>"A very knowledgeable and compatible team, greatly improving the quality of my life."</h3>
                    <p className="p-s" id="testimonial__paragraph">- John Smith</p>
                </div>
            <div id="testimonial__photo-container">
                {/* <img id="testimonial__photo" src="/home-care-photo-3.jpg" alt="Home Care Photo"/> */}
                <div style={{backgroundImage: 'url(/home-care-photo-3.jpg)'}} id="testimonial__photo" alt="Testimonial Photo" />
            </div>
        </section>
    )
}
