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
			<section className="container-main" id="about">
				<div id="about__text-container">
					<div id="hero__subtitle-container">
							<p className="p-m" id="about__subtitle">About Us</p>
							<div className="line" />
						</div>

						<h2 className="h2">Thorough in knowledge, diverse in practice</h2>
						<p className="p-m" id="about__paragraph">Our staff is thoroughly trained to work with patients with a wide range of diagnoses. These include Autism, Cerebral Palsy, Dementia, MS, Spinal cord injuries, and many other injuries that limit ones ability to  independently care for themselves.</p>
						<button className="button" id="about__button">Learn More</button>
					</div>
				<div id="about__photo-container">
					<img id="about__photo" src="/home-care-photo-2.jpeg" alt="Home Care Photo"/>
				</div>
			</section>
			<section className="section">Services</section>
			<section className="section">Contact</section>
		</main>

		<footer>
			Footer
		</footer>
  </div>
)

export default Home
