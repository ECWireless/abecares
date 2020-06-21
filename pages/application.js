import React, { Component } from 'react'
import Head from 'next/head';
import Router from 'next/router'
import '../sass/styles.scss';

// Components
import ApplicationForm from '../components/ApplicationForm';
import Backdrop from '../components/Backdrop';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default class application extends Component {
	state = {
		loaded: false,
		sidebarToggle: 'sidebar__false',
		backdropToggle: 'backdrop__false',
	}

	componentDidMount() {
		this.setState({ ...this.state, loaded: true })
	}
	
	scrollToLocation = (reference) => {
		this.setState({
			...this.state,
			sidebarToggle: 'sidebar__false',
			backdropToggle: 'backdrop__false',
			modalToggle: 'modal__false',
		})

		switch(reference) {
			case 'home':
				Router.replace('/')
				break;
			case 'about':
				Router.replace('/#about-us')
				break;
			case 'testimonials':
				Router.replace('/#testimonials')
				break;
			case 'services':
				Router.replace('/#our-services')
				break;
			case 'contact':
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

    render() {
        return (
            <div>
                <Head>
					<title>Employee Application | Abraham Home Care</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
				</Head>
                <main>
					{this.state.loaded && (
						<React.Fragment>
							<Sidebar sidebarToggle={this.state.sidebarToggle} onSidebarToggle={this.onSidebarToggle} />
							<Backdrop backdropToggle={this.state.backdropToggle} onSidebarToggle={this.onSidebarToggle} />
						</React.Fragment>
					)}
					<Header scrollToLocation={this.scrollToLocation} onSidebarToggle={this.onSidebarToggle} />
					<section className="container" id="application">
						<p id="application__subtitle" className="p-m">Application</p>
						<div id="application__line" className="line" />
						<h2 id="application__header" className="h2">Apply for a position</h2>
						<p id="application__paragraph" className="p-m"></p>
						<ApplicationForm />
					</section>
					<Footer scrollToLocation={this.scrollToLocation} />
                </main>
            </div>
        )
    }
}
