<script context="module" lang="ts">
	import MobileHeader from '$lib/components/navbar/MobileHeader.svelte'
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Location from '$lib/components/location/Location.svelte';
	import '../app.css';
</script>
<div class="wrapper-hack">
	<MobileHeader />
	<Header />
	<div class="slot-background">
		<slot />
	</div>
	<Contact />
	<Location />
	<Footer />
</div>	

<style>
.slot-background {
	background-color: var(--secondary-color);
}
.wrapper-hack {
    position: absolute;
    top: 0.5px;
    left: 0;
    right: 0;
    bottom: 0.5px;
}

</style>