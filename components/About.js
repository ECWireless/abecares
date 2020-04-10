import React from 'react'

export default function About() {
    return (
        <section className="container" id="about">
            <div id="about__text-container">
                <div id="hero__subtitle-container">
                        <p className="p-m" id="about__subtitle">About Us</p>
                        <div className="line" />
                    </div>

                    <h2 className="h2">Thorough in knowledge, diverse in practice</h2>
                    <p className="p-s" id="about__paragraph">Our staff is thoroughly trained to work with patients with a wide range of diagnoses. These include Autism, Cerebral Palsy, Dementia, MS, Spinal cord injuries, and many other injuries that limit ones ability to  independently care for themselves.</p>
                    <button className="button" id="about__button">Learn More</button>
                </div>
            <div id="about__photo-container">
                <img id="about__photo" src="/home-care-photo-2.jpg" alt="Home Care Photo"/>
            </div>
        </section>
    )
}
