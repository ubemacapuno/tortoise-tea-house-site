<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	// import MobileHeader from '$lib/components/navbar/MobileHeader.svelte';
	import '../app.css';
</script>

<Header />
<Hero />
<main>
	<slot />
</main>
<Contact />
<Footer />