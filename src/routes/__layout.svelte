<script context="module" lang="ts">
	import MobileHeader from '$lib/components/navbar/MobileHeader.svelte'
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Location from '$lib/components/location/Location.svelte';
	import '../app.css';
</script>
<MobileHeader />
<Header />
<main>
	<slot />
</main>
<Contact />
<Location />
<Footer />

<style>
	main{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-y: scroll;
	}

</style>