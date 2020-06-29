import React, { Component } from 'react';
import Head from 'next/head';
import '../sass/styles.scss';

// Components
import Sidebar from '../components/Sidebar';
import Backdrop from '../components/Backdrop';
import Header from '../components/Header';
import About from '../containers/home/About';
import Testimonial from '../containers/home/Testimonial';
import Footer from '../components/Footer';

export default class about extends Component {
    state = {
		sidebarToggle: 'sidebar__false',
		backdropToggle: 'backdrop__false',
	}

	onSidebarToggle = () => {
		if (this.state.sidebarToggle === 'sidebar__true') {
			this.setState({
				...this.state,
				sidebarToggle: 'sidebar__false',
				backdropToggle: 'backdrop__false',
			})
		} else {
			this.setState({
				...this.state,
				sidebarToggle: 'sidebar__true',
				backdropToggle: 'backdrop__true',
			})
		}
    }
    
    render() {
        return (
            <div>
                <Head>
					<title>About | Abraham Home Care</title>
                    <link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
                </Head>
                <main>
					<Sidebar sidebarToggle={this.state.sidebarToggle} onSidebarToggle={this.onSidebarToggle} />
                    <Backdrop backdropToggle={this.state.backdropToggle} onSidebarToggle={this.onSidebarToggle} />
                    <Header onSidebarToggle={this.onSidebarToggle} />
                    <About />
                    <Testimonial />
                    <div style={{height: '100px'}}></div>
                    <Footer />
                </main>
            </div>
        )
    }
}
