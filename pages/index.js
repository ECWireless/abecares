
import React, { Component, createRef } from 'react'
import Head from 'next/head';
import '../sass/styles.scss';
import "scroll-behavior-polyfill";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../containers/home/Hero';
import Banner from '../containers/home/Banner';
import About from '../containers/home/About';
import Testimonial from '../containers/home/Testimonial';
import Services from '../containers/home/Services';
import Contact from '../containers/home/Contact';


export default class index extends Component {
	state = {
		aboutRef: createRef(),
	}

	scrollToLocation = () => {
		window.scroll({
			top: this.state.aboutRef.current.offsetTop,
			behavior: 'smooth',
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
					<About aboutRef={this.state.aboutRef} />
					<Testimonial />
					<Services />
					<Contact />
				</main>

				<Footer />
			</div>
		)
	}
}
