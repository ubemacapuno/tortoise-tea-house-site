<script lang="ts">
	import Phone from '$lib/images/icons/phone.svg';
	// import largeLogo from '$lib/components/header/tortoise-tea-house-logo-main.jpg';
	import largeLogo from '$lib/components/header/tortoise-tea-house.png';
	import Location from '$lib/images/location/location-pin.svg';
	// This code below allows for smooth scrolling to ID on click
	const scrollToElement = (selector: any) => {
		const element = document.querySelector(selector);
		if (!element) return;
		let position = element.getBoundingClientRect().top;
		let offset = position + window.pageYOffset;
		window.scrollTo({
			top: offset,
			behavior: 'smooth'
		});
	};
	// End code for smooth scrolling to ID on click

</script>

<header class="wrapper">
	<div class="header-top">
		<nav>
			<ul>
				<!-- The following anchors below will use smooth scrolling to get to their respective element IDs -->
				<li><a class="nav-link" href={'#'} on:click|preventDefault={() => scrollToElement('#about')}>About</a></li>
				<li><a class="nav-link" href={'#'} on:click|preventDefault={() => scrollToElement('#photo-gallery')}>Gallery</a></li>
				<li><a class="nav-link" href={'#'} on:click|preventDefault={() => scrollToElement('#menu')}>Menu</a></li>
				<li><a class="nav-link" href={'#'} on:click|preventDefault={() => scrollToElement('#contact')}>Contact</a></li>
				<li><a class="nav-link" href={'#'} on:click|preventDefault={() => scrollToElement('#location')}>Location</a></li>
			</ul>
		</nav>
	</div>

	<div class="header-body">
		<img class="large-logo" src={largeLogo} alt="Tortoise Tea House Logo - Large" />

		<!-- Cards -->
		<div class="cards">
			<p class="card-detail">Wednesday to Monday <br /> 12pm - 8pm</p>
			<a
				class="card-detail-alternate"
				title="See us on Google Maps"
				href="https://goo.gl/maps/V7PwfwcMZjwaKAuP8"
			>
				<img src={Location} alt="Tortoise Tea House Phone" aria-hidden="true" />
				<p class="location-card">2418 E Greenway Rd Phoenix, AZ 85032</p>
			</a>

			<a class="card-detail-alternate" title="Call us at 1-602-612-2363" href="tel:16026122363">
				<img src={Phone} alt="Tortoise Tea House Phone" aria-hidden="true" />
				<p class="phone-card">(602) 612-2363</p>
			</a>
		</div>
	</div>
</header>

<style>
	header {
		background-color: #FBF1E9;
		background-image: url("$lib/images/background/desert-background.jpg");
		background-position: bottom;
		background-repeat: no-repeat;
		background-size:cover;
		background-attachment:fixed;
		height: 100%;
	}
	.wrapper {
		padding-bottom: 100px;
	}
	.header-top {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding-right: 100px;
		background-color: var(--primary-color);
	}
	.header-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	p {
		line-height: 1.4rem;
		margin: 0;
		text-align: center;
	}
	.large-logo {
		width: 85%;
		max-width: 575px;
		border-radius: 50%;
		border: 1px solid var(--color-transparent-alternate);
		background-color: var(--color-transparent);
		margin: 3rem 0 1rem 0;
	}
	.location-card,
	.phone-card {
		color: white;
		width: 215px;
	}
	.card-detail {
		color: var(--primary-color);
		border-radius: 25px;
		width: 250px;
		padding: 1rem;
		margin: 10px;
		background-color: white;
		transition: all 0.2s;
	}
	.cards {
		margin: 2rem 0;
	}
	.card-detail-alternate {
		border-radius: 25px;
		width: 250px;
		padding: 1rem;
		margin: 10px;
		background-color: var(--primary-color);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s;
	}
	.card-detail-alternate:hover {
		background-color: var(--tertiary-color);
	}
	nav {
		display: flex;
		justify-content: center;
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
		color: var(--pure-white);
		font-weight: 700;
		font-size: 1rem;
		/* text-transform: uppercase; */
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	a:hover,
	img:hover {
		color: var(--tertiary-color);
	}
	@media (max-width: 950px) {
		.header-top{
			padding-right: 0;
		}
		nav a{
			letter-spacing: 0;
		}
	}
	@media (max-width: 450px) {
		header {
		background-size: 1000px 648px;
		background-attachment:scroll;
		}
		.header-top {
			display: none;
		}
	}
</style>
