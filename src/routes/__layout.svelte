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
<div class="slot-background">
	<slot />
</div>
<Contact />
<Location />
<Footer />
<style>
.slot-background {
	background-color: var(--secondary-color);
}
</style>