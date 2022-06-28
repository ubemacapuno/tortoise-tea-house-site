<script context="module">
	import { browser, dev } from '$app/env';
	import Facebook from '$lib/images/socials/socials-facebook.svg'
	import Instagram from '$lib/images/socials/socials-instagram.svg'
	import Yelp from '$lib/images/socials/socials-yelp.svg'

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>


<section class="page-wrapper">
	<section class="contact-component">
		<h2>Contact</h2>
		
		<!-- Social Media -->

		<ul class="icons">
			<li><a class="icon" target="_blank" href=""><img src={Facebook} alt="Facebook Logo"></a></li>
			<li><a class="icon" target="_blank" href=""><img src={Instagram} alt="Instagram Logo"></a></li>
			<li><a class="icon" target="_blank" href="https://www.yelp.com/biz/tortoise-tea-house-phoenix"><img src={Yelp} alt="YelpLogo"></a></li>
		</ul>

		<p>Let us know how we're doing!</p>
		<form name="contact" method="POST" data-netlify="true">
			<div class="fields">
				<div class="field half">
					<p class="contact-form">Name (required)</p>
					<input type="text" name="name" id="name" required/>
				</div>
				<div class="field half">
					<p class="contact-form">Email (required)</p>
					<input type="email" name="email" id="email" required/>
				</div>
				<div class="field">
					<p class="contact-form">Message</p>
					<textarea name="message" id="message" rows="4" required></textarea>
				</div>
				<div class="field">
					<div data-netlify-recaptcha="true"></div>
				</div>
				<button type="submit" class="button">Send</button>
			</div>
		</form>

		<h2>Location</h2>

		<iframe class="google-map" title="Tortoise Tea House Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1711074002183!2d-112.03207368448756!3d33.62680514747617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b71694f8c3039%3A0x4e2e84a8cf815fcc!2sTortoise%20Tea%20House!5e0!3m2!1sen!2sus!4v1656351306191!5m2!1sen!2sus" width="220" height="180" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</section>
</section>

<style>
	.page-wrapper {
		background-color: var(--secondary-color);
	}
    .contact-component {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		text-align: center;
	}

	.icons {
		display: flex;
		margin: 1rem;
	}

	.icon {
		margin: 1rem;
	}

	@media (min-width: 480px) {
		.contact-component  {
			padding: 40px 0;
		}

		.google-map {
			width: 200px;
		}
	}
</style>