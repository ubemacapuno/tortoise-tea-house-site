<script context="module">
	import { browser, dev } from '$app/env';
	import Facebook from '$lib/images/socials/socials-facebook.svg'
	import Instagram from '$lib/images/socials/socials-instagram.svg'
	import Yelp from '$lib/images/socials/socials-yelp.svg'
	export const prerender = true;
</script>


<section class="contact-component">
	<section>

		<h2 id="contact">Contact</h2>
		<p>(602) 612-2363</p>
		<h5>Let us know how we're doing!</h5>
		
		<form name="contact-form-test" method="POST" data-netlify="true" netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="test" />
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
		
		<!-- Social Media -->

		<ul class="icons">
			<li><a class="icon" target="_blank" href="https://www.facebook.com/tortoiseteahouse"><img src={Facebook} alt="Facebook Logo"></a></li>
			<li><a class="icon" target="_blank" href="https://www.instagram.com/tortoiseteahouse/"><img src={Instagram} alt="Instagram Logo"></a></li>
			<li><a class="icon" target="_blank" href="https://www.yelp.com/biz/tortoise-tea-house-phoenix"><img src={Yelp} alt="YelpLogo"></a></li>
		</ul>

		<!-- Location -->

		<h2 id="location">Location</h2>
		<p class="location-card">2418 E Greenway Rd Phoenix, AZ 85032</p>
		<div class ="map-responsive"> 
			<iframe class="google-map" title="Tortoise Tea House Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.171278907392!2d-112.03207368255615!3d33.6268007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b71f423abf939%3A0x46649beea052a281!2s2418%20E%20Greenway%20Rd%2C%20Phoenix%2C%20AZ%2085032!5e0!3m2!1sen!2sus!4v1656612628486!5m2!1sen!2sus" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>

		<!-- <iframe class="google-map" title="Tortoise Tea House Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1711074002183!2d-112.03207368448756!3d33.62680514747617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b71694f8c3039%3A0x4e2e84a8cf815fcc!2sTortoise%20Tea%20House!5e0!3m2!1sen!2sus!4v1656351306191!5m2!1sen!2sus" width="220" height="180" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->

		

	</section>
</section>

<style>
    .contact-component {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: var(--secondary-color)
	}

	.icons {
		display: flex;
		margin: 1rem;
	}

	.icon {
		margin: 1rem;
	}

	form {
		border-radius: 16px;
		border: 1px solid var(--tertiary-color);
		padding: 16px;
		max-width: 600px;
		background-color: var(--secondary-color)
	} 
	.fields {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	.field p {
		margin-bottom: 0;
	}
	.field input, .field, .field textarea {
		width: 100%;
	}
	textarea {
		resize: none;
		min-height: 100px;
	}
	button {
		margin-top: 16px;
	}
	.google-map{
		margin-bottom: 22px;
	}
	/* map responsiveness start */
	.map-responsive{
		overflow:hidden;
		padding-bottom:56.25%;
		position:relative;
		height:0;
	}

	.map-responsive iframe{
			left:0;
			top:0;
			height:100%;
			width:100%;
			position:absolute;
		}
	/* map responsiveness end */

	@media (min-width: 480px) {
		.contact-component  {
			padding: 40px 0;
		}

		.google-map {
			width: 200px;
		}
	}

</style>