import React from 'react';
import Head from 'next/head';
import '../sass/styles.scss';

// Components
import Header from '../components/Header';
import Contact from '../containers/home/Contact';
import Footer from '../components/Footer';

export default function contact() {
    return (
        <div>
            <Head>
					<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
            </Head>
            <main>
                <Header />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}
