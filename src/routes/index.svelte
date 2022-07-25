<script context="module" lang="ts">
	export const prerender = true;
	import Specialty from '$lib/components/menu/Specialty.svelte';
	import Teas from '$lib/components/menu/Teas.svelte';
	import Toppings from '$lib/components/menu/Toppings.svelte';
	import FruitTea from '$lib/components/menu/FruitTea.svelte';
	import MilkTea from '$lib/components/menu/MilkTea.svelte';
	import Coffee from '$lib/components/menu/Coffee.svelte';
	import Gallery from '$lib/components/gallery/Gallery.svelte';
	import Wall from '$lib/images/gallery/gallery-wall.jpg'
	import Seo from '$lib/components/Seo.svelte'
</script>

<Seo pathname="/" />

<section class="about-us">
	<section class="index-header">
	<h2 id="about">About Us</h2>
	</section>
	<section class="index-body">
		<img src={Wall} class="about-img index-left" alt="Test">
		<section class="index-right">
			<p>Boba tea shop offering hand crafted drinks including milk teas, fruit teas, milkshakes, and more!</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum dolore aperiam ea minima ipsam aut voluptatibus tenetur eveniet dolorum, iste labore odit nobis error quos? Illo, iusto eius. Obcaecati.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quos aliquam dolores quaerat itaque quasi sunt? Sunt odio nulla omnis nostrum incidunt quo consequuntur ea voluptatem possimus, laudantium vitae minus.</p>
		</section>
	</section>
</section>
<div class="page-wrapper-menu">
	<Gallery />
	<section class="index-header">
		<h2 id="menu">Menu</h2>
	</section>
</div>
	<Specialty />
	<MilkTea />
	<FruitTea />
	<Toppings />
	<Coffee />
	<Teas />


<style>
	#about, .index-right p {
		color: var(--pure-white);
	}
	p {
		line-height: 1.6rem;
	}
	.about-us{
		min-height: 60vh;
		background-color: var(--primary-color);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: auto;
		background-attachment:fixed;
		padding: 100px 0;
	}
	.about-img {
			margin: 1rem;
			width: 440px;
			max-width: 90%;
			border-radius: 3%;
		}
	h2{
		margin-top: 0;
		padding-top: 1rem;
	}
	.index-header {
		text-align: center;
	}

	.index-right {
		padding-left: 10px;
		margin-left: 20px;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}

	.index-left {
		margin-right: 20px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.index-body {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		width: 100%;
		max-width: 1800px;
		margin: 0 auto;
		box-sizing: border-box;
	}

@media screen and (max-width: 900px) {

		.index-body {
		flex-direction: column;
		}

		.index-right {
			padding: 0;
			margin: 0;
		}
}

@media screen and (max-width: 600px) {

}
</style>