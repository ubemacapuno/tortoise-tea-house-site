<script context="module" lang="ts">
	import MobileHeader from '$lib/components/navbar/MobileHeader.svelte'
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Location from '$lib/components/location/Location.svelte';
	import Landscape from "$lib/images/background/desert-background.png"
	import '../app.css';
</script>
<MobileHeader />
<Header />
<!-- <div class="desert-image wrapper" alt="Desert Landscape">
	<header>
		<img src={Landscape} alt="Desert Landscape Painting" loading="lazy">
	</header>
</div> -->

<slot />

<Contact />
<Location />
<Footer />

<style>
	/* main{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-y: scroll;
	} */

</style>