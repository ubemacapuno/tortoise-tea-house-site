<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Contact from '$lib/components/contact/contact.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	import MobileHeader from '$lib/components/navbar/MobileHeader.svelte';
	import Specialty from '$lib/components/menu/Specialty.svelte';
	import Teas from '$lib/components/menu/Teas.svelte';
	import Toppings from '$lib/components/menu/Toppings.svelte';
	import FruitTea from '$lib/components/menu/FruitTea.svelte';
	import MilkTea from '$lib/components/menu/MilkTea.svelte';
	import Coffee from '$lib/components/menu/Coffee.svelte';
	import '../app.css';
</script>

<Header />
<Hero />

<main>
	<slot />
</main>
<Specialty />
<MilkTea />
<FruitTea />
<Toppings />
<Teas />
<Coffee />
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
