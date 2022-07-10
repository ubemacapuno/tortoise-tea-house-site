<script context="module">
	import Facebook from '$lib/images/socials/socials-facebook.svg'
	import Instagram from '$lib/images/socials/socials-instagram.svg'
	import Yelp from '$lib/images/socials/socials-yelp.svg'
	export const prerender = true;
</script>


<section class="contact-component">
	<!-- Adding Page-wrapper is creating horizontal scroll on devices ~280px width. Figure out why -->
	<div class=""> 
		<section>
			<h2 id="contact">Contact</h2>
			<p>(602) 612-2363</p>
			<h4>Let us know how we're doing!</h4>
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
		</section>
	</div>
</section>

<style>
	
     .contact-component {
		display: flex;
		justify-content: center;
		text-align: center;
		background-color: var(--secondary-color);

	}

	.contact-component section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.contact-form{ 
		/* p elements */
		color: var(--text-color);
		text-align: left;
		margin: 1rem 0;
	}

	.icons {
		display: flex;
		margin: 1rem;
		justify-content: space-around;
	}

	.icon {
		margin: 1rem;
	} 

	form {
		border-radius: 1rem;
		border: 1px solid var(--primary-color);
		padding: 1rem;
		width: 600px;
		background-color: var(--tertiary-color)
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
		margin-top: 16px;
	}

@media (max-width: 650px) {
		form {
		width: 400px;
	} 
}

@media (max-width: 430px) {
		form {
		width: 270px;
	} 
}

</style>