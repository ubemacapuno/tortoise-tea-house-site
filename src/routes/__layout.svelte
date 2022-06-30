<script context="module" lang="ts">
	import MobileHeader from '$lib/components/navbar/MobileHeader.svelte'
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import '../app.css';
</script>
<MobileHeader />
<Header />
<main>
	<slot />
</main>
<Contact />
<Footer />

<style>

</style>