import React from 'react'
import Head from 'next/head';
import Router from 'next/router'
import '../sass/styles.scss';

// Components
import ApplicationForm from '../components/ApplicationForm';
import Backdrop from '../components/Backdrop';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Application = () => {
	const [loaded, setLoaded] = React.useState(false);
	const [sidebarToggle, setSidebarToggle] = React.useState('sidebar__false');
	const [backdropToggle, setBackdropToggle] = React.useState('backdrop__false');
	const [modalToggle, setModalToggle] = React.useState('modal__false');

	React.useEffect(() => {
		setLoaded(true);
	}, []);
	
	const scrollToLocation = (reference) => {
		setSidebarToggle('sidebar__false');
		setBackdropToggle('backdrop__false');
		setModalToggle('modal__false');

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

	const onSidebarToggle = (reference) => {
		if (sidebarToggle === 'sidebar__true' && modalToggle !== 'modal__true') {
			setSidebarToggle('sidebar__false');
			setBackdropToggle('backdrop__false');
			scrollToLocation(reference);
		} else if (sidebarToggle !== 'sidebar__true' && modalToggle !== 'modal__true') {
			setSidebarToggle('sidebar__true');
			setBackdropToggle('backdrop__true');
		} else {
			setBackdropToggle('backdrop__false');
			setModalToggle('modal__false');
		}
	}

	return (
		<div>
			<Head>
				<title>Employee Application | Abraham Home Care</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
			</Head>
				<main>
					{loaded && (
						<React.Fragment>
							<Sidebar sidebarToggle={sidebarToggle} onSidebarToggle={onSidebarToggle} />
							<Backdrop backdropToggle={backdropToggle} onSidebarToggle={onSidebarToggle} />
						</React.Fragment>
					)}
					<Header scrollToLocation={scrollToLocation} onSidebarToggle={onSidebarToggle} />
					<section className="container" id="application">
						<p id="application__subtitle" className="p-m">Application</p>
						<div id="application__line" className="line" />
						<h2 id="application__header" className="h2">Apply for a position</h2>
						<p id="application__paragraph" className="p-m"></p>
						<ApplicationForm />
					</section>
					<Footer scrollToLocation={scrollToLocation} />
				</main>
			</div>
	)
}

export default Application;
