import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Main.css';
import Helmet from 'react-helmet';

function App() {
	function fixNavbar() {
		let navbar = document.getElementById('navigationbar');
		let navIcon = document.getElementsByClassName('nav-icon');
		let caretUp = document.getElementById('caret-up');
		let caretDown = document.getElementById('caret-down');

		if (navbar.classList.contains('bg-light', 'navbar-light')) {
			setTimeout(fixNavbar2, 300);
		} else if (
			!navbar.classList.contains('bg-light', 'navbar-light')
		) {
			navbar.classList.add('bg-light', 'navbar-light');
			for (let i = 0; i < navIcon.length; i++) {
				navIcon[i].style.color = 'black';
			}
			caretUp.style.display = 'inline';
			caretDown.style.display = 'none';
		}
	}

	function fixNavbar2() {
		let navbar = document.getElementById('navigationbar');
		let navIcon = document.getElementsByClassName('nav-icon');
		let caretUp = document.getElementById('caret-up');
		let caretDown = document.getElementById('caret-down');

		navbar.classList.remove('bg-light', 'navbar-light');
		for (let i = 0; i < navIcon.length; i++) {
			navIcon[i].style.color = 'white';
		}
		caretUp.style.display = 'none';
		caretDown.style.display = 'inline';
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>Josie Proto</title>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
					integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
					crossorigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<header />
			<main>
				<div className="hero-image">
					<nav
						className="navbar navbar-expand-sm transparent"
						id="navigationbar"
					>
						<a className="navbar-brand nav-icon" href="#">
							Josie Proto Music
						</a>
						<button
							className="navbar-toggler my-socialmedia"
							data-toggle="collapse"
							data-target="#navbarMenu"
							onClick={fixNavbar}
						>
							<span id="social-media nav-icon">
								<span className="nav-icon">
									Social Media
								</span>
							</span>{' '}
							<i
								className="fas fa-caret-down nav-icon"
								id="caret-down"
							/>
							<i
								className="fas fa-caret-up nav-icon"
								id="caret-up"
							/>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarMenu"
						>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item ml-auto">
									<a
										href="https://www.facebook.com/josie.proto.music/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Facebook
										</span>{' '}
										<i className="fab fa-facebook nav-icon" />{' '}
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://www.instagram.com/josieproto/?hl=en"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Instagram
										</span>{' '}
										<i className="fab fa-instagram nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://twitter.com/josieproto?lang=en"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										{' '}
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Twitter
										</span>{' '}
										<i className="fab fa-twitter nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href=""
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Spotify
										</span>{' '}
										<i className="fab fa-spotify nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://www.youtube.com/channel/UCncK76CuAfrovl-B1dvkqTg/videos"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Youtube
										</span>{' '}
										<i className="fab fa-youtube nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://soundcloud.com/josie-proto"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Soundcloud
										</span>{' '}
										<i className="fab fa-soundcloud nav-icon" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<div className="hero-text">
						<h1 id="herotext" className="d-none d-lg-inline">
							Josie Proto Music
						</h1>
						<p id="herodescription">
							Lorem ipsum dolor sit amet, consectetuer
							adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa. Cum sociis natoque
							penatibus et magnis dis parturient montes,
							nascetur ridiculus mus. Donec quam felis,
							ultricies nec, pellentesque eu, pretium quis,
							sem. Nulla consequat massa quis enim. Donec.
						</p>
					</div>
				</div>

				<div className="container-fluid">
					<div className="row justify-content-center banner">
						<div className="col-12 banner text-center">
							<a
								href="spotify"
								target="_blank"
								rel="noopener noreferrer"
								className="banner-text"
								id="banner-link"
							>
								listen now on spotify
							</a>
						</div>
					</div>
				</div>

				<div className="container p-3">
					<div className="row justify-content-center">
						<div className="col-xl-4 col-lg-7 col-md-8 col-sm-11 col-11 twitter-feed order-2">
							<a
								className="twitter-timeline"
								href="https://twitter.com/Twitter?ref_src=twsrc%5Etfw"
								data-width="100%"
								data-height="550.66px"
								data-theme="light"
							>
								Tweets by Twitter
							</a>
							<form
								action="https://formspree.io/xnqdddbr"
								method="POST"
								className="text-center white"
							>
								<div className="form-group">
									<label htmlFor="email">
										Sign up to my mailing list
									</label>
									<input
										type="email"
										placeholder="Enter your email here"
										name="email"
										id="email"
										className="form-control"
										required
									/>
									<button
										type="submit"
										id="submit"
										className="btn-dark mt-1"
										// style="background-color: #4d3900; border: #4d3900; position: relative; top: 5px; border-radius: 4px;"
									>
										Submit
									</button>
								</div>
							</form>
						</div>

						<div className="col-xl-7 col-lg-10 col-md-11 col-sm-12 slideshow order-1">
							<div
								id="carouselExampleIndicators"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators">
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="0"
										className="active"
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="1"
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="2"
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="3"
									/>
								</ol>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											className="d-block img-fluid w-100"
											src="./(Edited) Album Cover.png"
											alt="First slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block img-fluid w-100"
											src="./Hero2.jpeg"
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block img-fluid w-100"
											src="./(Edited) Portrait1.png"
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block img-fluid w-100"
											src="./(Edited) Portrait2.png"
											alt="Second slide"
										/>
									</div>
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									/>
									<span className="sr-only">
										Previous
									</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									/>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}

export default App;
