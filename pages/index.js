
import React, { Component } from 'react'
import Head from 'next/head';
import '../sass/styles.scss';
import "scroll-behavior-polyfill";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import About from '../components/About';
import Testimonial from '../components/Testimonial';


export default class index extends Component {

	scrollToLocation = () => {
		window.scroll({
			top: 1000,
			behavior: 'smooth'
		});
	}

	render() {
		return (
			<div>
				<Head>
					<title>Abraham Home Care</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
				</Head>

				<main>
					<Header />
					<Hero />
					<Banner scrollToLocation={this.scrollToLocation} />
					<About />
					<Testimonial />
					<section className="container">Services</section>
					<section className="container">Contact</section>
				</main>

				<Footer />
			</div>
		)
	}
}
