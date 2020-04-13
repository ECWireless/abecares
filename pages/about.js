import React from 'react';
import Head from 'next/head';
import '../sass/styles.scss';

// Components
import Header from '../components/Header';

export default function about() {
    return (
        <div>
            <Head>
				<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
            </Head>
            <main>
                <Header />
                About Page
            </main>
        </div>
    )
}
