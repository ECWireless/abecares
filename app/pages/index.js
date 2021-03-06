import React, { Component, createRef } from 'react';
import Head from 'next/head';
import Router from 'next/router'
import '../sass/styles.scss';
import "scroll-behavior-polyfill";
// import ScrollAnimation from 'react-animate-on-scroll';

// Sections
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';
import Backdrop from '../components/Backdrop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../containers/home/Hero';
import Banner from '../containers/home/Banner';
import About from '../containers/home/About';
import Testimonial from '../containers/home/Testimonial';
// import Services from '../containers/home/Services';
import Services2 from '../containers/home/Services2';
import Contact from '../containers/home/Contact';

export default class index extends Component {
	state = {
		data: [],
		loaded: false,
		sidebarToggle: 'sidebar__false',
		backdropToggle: 'backdrop__false',
		modalToggle: 'modal__false',
		aboutRef: createRef(),
		testimonialsRef: createRef(),
		servicesRef: createRef(),
		contactRef: createRef(),
	}

	componentDidMount() {
		this.setState({ ...this.state, loaded: true })
		const pathname = window.location.href.split('/', [4])
		switch(pathname[3]) {
			case '#about-us':
				this.scrollToLocation('about')
				break;
			case '#testimonials':
				this.scrollToLocation('testimonials')
				break;
			case '#our-services':
				this.scrollToLocation('services')
				break;
			case '#contact-us':
				this.scrollToLocation('contact')
				break;
			default:
				return;
		}
	}

	scrollToLocation = (reference) => {
		this.setState({
			...this.state,
			loaded: true,
			sidebarToggle: 'sidebar__false',
			backdropToggle: 'backdrop__false',
			modalToggle: 'modal__false',
		})

		switch(reference) {
			case 'home':
				window.scroll({
					top: 0,
					behavior: 'smooth',
				});
				Router.replace('/')
				break;
			case 'about':
				window.scroll({
					top: this.state.aboutRef.current.offsetTop - 80,
					behavior: 'smooth',
				});
				Router.replace('/#about-us')
				break;
			case 'testimonials':
				window.scroll({
					top: this.state.testimonialsRef.current.offsetTop - 80,
					behavior: 'smooth',
				});
				Router.replace('/#testimonials')
				break;
			case 'services':
				window.scroll({
					top: this.state.servicesRef.current.offsetTop - 80,
					behavior: 'smooth',
				});
				Router.replace('/#our-services')
				break;
			case 'contact':
				window.scroll({
					top: this.state.contactRef.current.offsetTop - 80,
					behavior: 'smooth',
				});
				Router.replace('/#contact-us')
				break;
			default:
				return;
		}
	}

	onSidebarToggle = (reference) => {
		if (this.state.sidebarToggle === 'sidebar__true' && this.state.modalToggle !== 'modal__true') {
			this.setState({
				...this.state,
				sidebarToggle: 'sidebar__false',
				backdropToggle: 'backdrop__false',
			})
			this.scrollToLocation(reference);
		} else if (this.state.sidebarToggle !== 'sidebar__true' && this.state.modalToggle !== 'modal__true') {
			this.setState({
				...this.state,
				sidebarToggle: 'sidebar__true',
				backdropToggle: 'backdrop__true',
			})
		} else {
			this.setState({
				...this.state,
				backdropToggle: 'backdrop__false',
				modalToggle: 'modal__false',
			})
		}
	}

	onModalToggle = () => {
		if (this.state.modalToggle === 'modal__true') {
			this.setState({
				...this.state,
				modalToggle: 'modal__false',
				backdropToggle: 'backdrop__false',
			})
		} else {
			this.setState({
				...this.state,
				modalToggle: 'modal__true',
				backdropToggle: 'backdrop__true',
			})
		}
	}

	render() {
		return (
			<div>
				<Head>
					<title>Abraham Home Care</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
				</Head>

				<main>
					{this.state.loaded && (
						<React.Fragment>
							<Sidebar sidebarToggle={this.state.sidebarToggle} onSidebarToggle={this.onSidebarToggle} />
							<Backdrop backdropToggle={this.state.backdropToggle} onSidebarToggle={this.onSidebarToggle} />
							<Modal modalToggle={this.state.modalToggle} onModalToggle={this.onModalToggle} />
						</React.Fragment>
					)}
					<Header isHomePage={this.state.isHomePage} scrollToLocation={this.scrollToLocation} onSidebarToggle={this.onSidebarToggle} />

					<Hero data={this.state.data[0]} scrollToLocation={this.scrollToLocation} onModalToggle={this.onModalToggle} />
					<Banner scrollToLocation={this.scrollToLocation} />
					<About scrollToLocation={this.scrollToLocation} aboutRef={this.state.aboutRef} />
					<Testimonial testimonialsRef={this.state.testimonialsRef} />
					<Services2 scrollToLocation={this.scrollToLocation} servicesRef={this.state.servicesRef} />
					<Contact contactRef={this.state.contactRef} />

					<Footer scrollToLocation={this.scrollToLocation} />
				</main>
			</div>
		)
	}
}
