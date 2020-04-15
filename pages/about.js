import React from 'react';
import Head from 'next/head';
import '../sass/styles.scss';

// Components
import Header from '../components/Header';
import About from '../containers/home/About';
import Testimonial from '../containers/home/Testimonial';
import Footer from '../components/Footer';

export default function about() {
    return (
        <div>
            <Head>
				<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
            </Head>
            <main>
                <Header />
                <About />
                <Testimonial />
                <div style={{height: '100px'}}></div>
                <Footer />
            </main>
        </div>
    )
}
