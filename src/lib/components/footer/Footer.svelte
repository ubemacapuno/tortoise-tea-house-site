<script>
	let copyrightYear = new Date().getFullYear() 
</script>
<section class="footer-section">
	<section>
		<footer>
			<p class="copyright">© {copyrightYear} Tortoise Tea House</p>
		</footer>
	</section>
</section>

<style>
	.footer-section {
		background-color: var(--primary-color);
	}

    footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px;
		text-align: center;
		color: var(--pure-white);
	}

	.copyright {
		margin: 1rem 0 0 0;
		color: var(--pure-white);
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
	.copyright{
		margin: 0 auto;
	}
</style>