<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Tortoise Tea House</title>
	<meta name="Tortoise Tea House Main Page" content="Svelte demo app" />
</svelte:head>

<section class="page-wrapper">
	<h2>About Us</h2>
	<h4>Image Here</h4>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto ipsa minima, corrupti eaque, dicta voluptatibus aperiam quibusdam, sequi eos sed corporis id incidunt. Ut sint in doloribus quod minima!</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum dolore aperiam ea minima ipsam aut voluptatibus tenetur eveniet dolorum, iste labore odit nobis error quos? Illo, iusto eius. Obcaecati.</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	h4 {
		width: 200px;
		height: 200px;
		outline: solid coral;
	}
</style>