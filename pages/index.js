import Head from 'next/head';

import '../sass/styles.scss'

const Home = () => (
	<div className="container">
		<Head>
			<title>Abraham Home Care</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="stylesheet" href="https://use.typekit.net/atg0jpe.css"></link>
		</Head>

		<main>
			<header className="section" id="header">
				<div className="container-main">
					<a id="header-logo-link" href="/">
						<img src="/logo-horizontal.png" alt="Logo" id="header-logo" />
					</a>
					<nav id="container-nav">
						<a className="nav-item" href="/">Home</a>
						<a className="nav-item" href="/">About</a>
						<a className="nav-item" href="/">Services</a>
					</nav>
					<button className="button">Contact</button>
				</div>
			</header>
			<section className="section">Hero</section>
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
