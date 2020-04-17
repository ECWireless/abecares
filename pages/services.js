import React, { Component } from 'react';
import Head from 'next/head';
import '../sass/styles.scss';

// Components
import Sidebar from '../components/Sidebar';
import Backdrop from '../components/Backdrop';
import Header from '../components/Header';
import Services from '../containers/home/Services';
import Footer from '../components/Footer';


export default class services extends Component {
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
                        <link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
                </Head>
                <main>
					<Sidebar sidebarToggle={this.state.sidebarToggle} onSidebarToggle={this.onSidebarToggle} />
                    <Backdrop backdropToggle={this.state.backdropToggle} onSidebarToggle={this.onSidebarToggle} />
                    <Header onSidebarToggle={this.onSidebarToggle} />
                    <Services />
                    <div style={{height: '100px'}}></div>
                    <Footer />
                </main>
            </div>
        )
    }
}
