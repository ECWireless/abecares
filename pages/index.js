import Head from 'next/head';
import '../sass/styles.scss';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Home = () => (
	<div className="container">
		<Head>
			<title>Abraham Home Care</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
		</Head>

		<main>
			<Header />
			<Hero />
			<Banner />
			<section className="section">About</section>
			<section className="section">Services</section>
			<section className="section">Contact</section>
		</main>

		<footer>
			Footer
		</footer>
  </div>
)

export default Home
