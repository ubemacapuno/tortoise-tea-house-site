<script lang="ts">
	// import { page } from '$app/stores';
	import logo from './placeholder-logo.svg';
	import Phone from '$lib/images/icons/phone.svg'
	import largeLogo from './placeholder-logo-big.svg';

	// This code below allows for smooth scrolling to ID on click
  	const scrollToElement = (selector: any) => {
    	const element = document.querySelector(selector);
    	if (!element) return;

		let position = element.getBoundingClientRect().top;
		let offset = position + window.pageYOffset;
		window.scrollTo({
		top: offset,
		behavior: 'smooth',
		});
	};
	// End code for smooth scrolling to ID on click
</script>

<header class="wrapper">
	<div class="header-top">
		<div class="corner">
			<a href="/">
				<img src={logo} alt="Tortoise Tea House Logo" />
			</a>
		</div>
		<nav>
			<ul>
				<!-- The following anchors below will use smooth scrolling to get to their respective element IDs -->
				<li><a href={'#'} on:click|preventDefault={() => scrollToElement('#menu')}>Menu</a></li>
				<li><a href={'#'} on:click|preventDefault={() => scrollToElement('#about')}>About</a></li>
				<li><a href={'#'} on:click|preventDefault={() => scrollToElement('#contact')}>Contact</a></li>
				<li><a href={'#'} on:click|preventDefault={() => scrollToElement('#location')}>Location</a></li>
			</ul>
		</nav>
	</div>

	<div class="header-body">
		<h2>Tortoise Tea House</h2>
		<img class="large-logo" src={largeLogo} alt="Tortoise Tea House Logo - Large" />

		<!-- Cards -->
		
		<p class="card-detail">Wed - Mon: 12pm  - 8pm</p>
		<p class="card-detail">Closed Tuesday</p>
		<a class="card-detail-alternate" title="See us on Google Maps" href="https://goo.gl/maps/V7PwfwcMZjwaKAuP8"><p class="location-card">2418 E Greenway Rd Phoenix, AZ 85032</p></a>
		
		<a href="tel:1-602-612-2363" class="phone-btn" title="Give us a call!">
			<img class="fas fa-phone-alt" src={Phone} alt="Tortoise Tea House Phone" aria-hidden="true">
			<span class="phone-number">(602) 612-2363</span>
		</a>
	</div>
</header>

<style>

header {
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--secondary-color);
	/* background: url('$lib/images/background/wiggle.svg'); */
}

.wrapper {
	margin-bottom: 100px;
}

.header-top{
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	background-color: var(--primary-color);
}

.header-body{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

h2, p{
	text-align: center;
}

h2 {
	background-color: white;
	margin: 1rem;
}

.large-logo {
	max-width: 180px;
	margin-bottom: 16px;
	/* background-color: white; */
}

.corner {
	width: 3em;
	height: 3em;
}

.corner a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.location-card {
	background-color: var(--primary-color);
	color: white;
}

.location-card::before {
	content: url('$lib/images/location/location-pin.svg');
}

span {
	margin-top: 1rem;
	color: black;
}

.card-detail {
	border: 1px solid black;
	border-radius: 10px;
	width: 250px;
	padding: 5px;
	margin: 10px;
	background-color: white;
}

.card-detail-alternate {
	border: 1px solid black;
	border-radius: 10px;
	width: 250px;
	padding: 5px;
	margin: 10px;
	background-color: var(--primary-color);
}

.corner img {
	width: 2em;
	height: 2em;
	object-fit: contain;
}

.phone-btn {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 250px;
	justify-content: space-around;
	margin: 10px;
}

nav {
	display: flex;
	justify-content: center;
	--background: rgba(255, 255, 255, 0.7);
}

ul {
	position: relative;
	padding: 0;
	margin: 0;
	height: 3em;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	background: var(--background);
	background-size: contain;
}

li {
	position: relative;
	height: 100%;
}

nav a {
	display: flex;
	height: 100%;
	align-items: center;
	padding: 0 1em;
	color: var(--heading-color);
	font-weight: 700;
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	text-decoration: none;
	transition: color 0.2s linear;
}

a:hover, img:hover {
	color: var(--accent-color);
}

@media (max-width: 450px) {
        .header-top {
            display: none;
        }
    }

</style>