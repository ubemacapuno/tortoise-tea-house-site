<script context="module" lang="ts">
	export const prerender = true;
	import Specialty from '$lib/components/menu/Specialty.svelte';
	import Teas from '$lib/components/menu/Teas.svelte';
	import Toppings from '$lib/components/menu/Toppings.svelte';
	import FruitTea from '$lib/components/menu/FruitTea.svelte';
	import MilkTea from '$lib/components/menu/MilkTea.svelte';
	import Coffee from '$lib/components/menu/Coffee.svelte';
</script>

<svelte:head>
	<title>Tortoise Tea House</title>
	<meta name="Tortoise Tea House Main Page" content="Svelte demo app" />
</svelte:head>

<div class="page-wrapper">
	<section class="index-header">
		<h2 id="about">About Us</h2>
	</section>

	<section class="index-body">
		<img class="test-img index-left" src="" alt="Test">
		<section class="index-right">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto ipsa minima, corrupti eaque, dicta voluptatibus aperiam quibusdam, sequi eos sed corporis id incidunt. Ut sint in doloribus quod minima!</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum dolore aperiam ea minima ipsam aut voluptatibus tenetur eveniet dolorum, iste labore odit nobis error quos? Illo, iusto eius. Obcaecati.</p>
		</section>
	</section>
	
</div>

<section class="index-header">
	<h2 id="menu">Menu</h2>
</section>

<Specialty />
<MilkTea />
<FruitTea />
<Toppings />
<Coffee />
<Teas />


<style>


	.index-header {
		text-align: center;
	}

	.index-right {
		padding-left: 10px;
		margin-left: 20px;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		max-width: 440px;
	}

	.index-left {
		padding-right: 10px;
		margin-right: 20px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.index-body {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	.test-img {
		width: 350px;
		height: 350px;
		outline: solid var(--primary-color);
	}

@media screen and (max-width: 900px) {

		.index-body {
		flex-direction: column;
		}

		.index-right {
			padding: 0;
			margin: 0;
		}

		.test-img {
			margin: 1rem;
		}
}

@media screen and (max-width: 600px) {
	.test-img {
		width: 200px;
		height: 200px;
		outline: solid var(--primary-color);
	}
}
</style>