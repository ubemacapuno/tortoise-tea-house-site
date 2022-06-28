<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Contact from '$lib/components/contact/contact.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	import MobileHeader from '$lib/components/navbar/MobileHeader.svelte';
	import '../app.css';
</script>

<Header />
<Hero />
<main>
	<slot />
</main>
<Contact />
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
