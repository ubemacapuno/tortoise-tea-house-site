<script context="module">
	import Facebook from '$lib/images/socials/socials-facebook.svg'
	import Instagram from '$lib/images/socials/socials-instagram.svg'
	import Yelp from '$lib/images/socials/socials-yelp.svg'
	export const prerender = true;
</script>


<section class="contact-component">
	<section class="contact-wrapper">
		<h2 id="contact">Let's Connect</h2>
		<p>Phone: <a href="tel:+6026122363">(602) 612-2363</p>
			<!-- Social Media -->
			<ul class="icons">
				<li><a target="_blank" href="https://www.facebook.com/tortoiseteahouse"><img class="social-icon" src={Facebook} alt="Facebook Logo"></a></li>
				<li><a target="_blank" href="https://www.instagram.com/tortoiseteahouse/"><img class="social-icon" src={Instagram} alt="Instagram Logo"></a></li>
				<li><a target="_blank" href="https://www.yelp.com/biz/tortoise-tea-house-phoenix"><img class="social-icon" src={Yelp} alt="YelpLogo"></a></li>
			</ul>
		<h4>Let us know how we're doing!</h4>
		<div class="contact-card">
			<form name="contact-form-test" method="POST" data-netlify="true" netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="test" />
				<div class="fields">
					<div class="field half">
						<p class="contact-form">Name</p>
						<input type="text" name="name" id="name" required/>
					</div>
					<div class="field half">
						<p class="contact-form">Email</p>
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
		</div>
	</section>
</section>

<style>
	h2, h4, p {
		color: var(--text-color);
	}
	a{
		color: var(--primary-color);
		font-weight: bold;
		transition: all 0.2s;
		letter-spacing: 1px;
	}
	a:hover{
		color: var(--pure-white);
	}
	.contact-component {
		background-image: linear-gradient(to right top,var(--primary-color),var(--tertiary-color),var(--secondary-color));
	}

	.contact-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 900px;
		margin: 0 auto;
	}
	
	.contact-component section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2, h4, p {
		text-align: center;
	}

	h4{
		margin: 1.38rem 0 1.38rem;
	}

	.contact-form{ 
		/* p elements */
		color: var(--pure-white);
		text-align: left;
		margin: 1rem 0;
	}

	.icons {
		display: flex;
		margin: 1rem;
		justify-content: space-around;
	}

	.social-icon {
		margin: 0 1rem;
	} 

	form {
		border-radius: 1rem;
		border: 2px solid var(--pure-white);
		padding: 1rem;
		width: 100%;
		background-color: hsla(228, 16%, 70%, 40%);
		margin-bottom: 3rem;
	} 
	.fields {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	.field input, .field, .field textarea {
		width: 100%;
	}
	textarea {
		resize: none;
		min-height: 100px;
	}
	button {
		cursor: pointer;
		font-weight: bold;
		font-size: inherit;
		font-family: inherit;
		color: var(--pure-white);
		border: 2px solid var(--secondary-color);
		padding: 10px;
		background-color: var(--primary-color);
		transition: all 0.2s;
		cursor: pointer;
		margin: 5px 0 16px 0;
		transition: 0.2s;
		letter-spacing: 0.1rem;
	}
	button:hover {
    	background-color: var(--pure-white);
		color: var(--primary-color);
		border: 2px solid var(--primary-color);
	}
	.contact-card{
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
}

</style>