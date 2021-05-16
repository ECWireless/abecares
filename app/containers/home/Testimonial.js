import React from 'react'

export default function Testimonial(props) {
    return (
        <section className="container" id="testimonial" ref={props.testimonialsRef}>
            <div id="testimonial__text-container">
                <div id="hero__subtitle-container">
                        <p className="p-m" id="testimonial__subtitle">Why Us</p>
                        <div className="line" style={{borderBottom: '4px solid #fff'}} />
                    </div>

                    <h3 className="h3" style={{color: '#fff'}}>"Abraham Home Care is the best company to take of my brother. The agency treats my brother with respect and they always makes sure that he has everything that he needs.  My family thanks Mr. Jordan so very much, he has proven himself to be a good person."</h3>
                    <p className="p-s" id="testimonial__paragraph">- Aeman Hassan</p>
                </div>
            <div id="testimonial__photo-container">
                {/* <img id="testimonial__photo" src="/home-care-photo-3.jpg" alt="Home Care Photo"/> */}
                <div style={{backgroundImage: 'url(/new-photo-2.jpg)'}} id="testimonial__photo" alt="Testimonial Photo" />
            </div>
        </section>
    )
}
