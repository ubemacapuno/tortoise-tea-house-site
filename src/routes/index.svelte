<script context="module" lang="ts">
	export const prerender = true;
	import Specialty from '$lib/components/menu/Specialty.svelte';
	import Teas from '$lib/components/menu/Teas.svelte';
	import Toppings from '$lib/components/menu/Toppings.svelte';
	import FruitTea from '$lib/components/menu/FruitTea.svelte';
	import MilkTea from '$lib/components/menu/MilkTea.svelte';
	import Coffee from '$lib/components/menu/Coffee.svelte';
	import LazyLoadPlaceholder from '$lib/components/gallery/LazyLoadPlaceholder.svelte'
	import Wall from '$lib/images/gallery/gallery-wall.jpg'
	import Seo from '$lib/components/Seo.svelte'
</script>

<Seo pathname="/" />

<!-- About Us Section -->
<section id="about" class="about-us">
	<div class="index-header">
	<h2>About Us</h2>
	</div>
	<div class="index-body">
		<img src={Wall} class="about-img index-left" alt="Test">
		<div class="index-right">
			<p>Tortoise Tea House is a locally owned drink shop that brings unique and creative flavors to North Phoenix. We combine our Asian heritage and Arizona influences to create traditional flavors with a modern twist.</p>
			<p>Our mission is to provide new and exciting creations with fresh ingredients and unique flavors. Our space and drinks are designed to create good vibes and leave everyone who visits with a memorable experience.</p>
			<p>We can't wait to share our passion for taste and creativity with you!</p>
		</div>
	</div>
</section>
<!-- Gallery Section -->
<section class="gallery-background">
	<div class="page-wrapper-gallery">
		<LazyLoadPlaceholder />
	</div>
</section>
<!-- Menu section -->
<section id="menu" class="menu-background">
	<div class="page-wrapper">
		<div class="index-header">
			<h2 class="menu-title">Menu</h2>
			<p>Online prices may be changed at any time without further notice.   Please call us for current pricing.</p>
			<Specialty />
			<MilkTea />
			<FruitTea />
			<Teas />
			<Coffee />
			<Toppings />
		</div>
	</div>
</section>


<style>
	.gallery-background {
		background-color: var(--background-color);
	}
	.menu-background{
		background-color: var(--background-color);
		padding-top: 50px;
	}
	.menu-title{
		color: black;
	}
	.page-wrapper-gallery {
		padding: 0 10px;
		margin: 0 auto;
		max-width: 945px;
	}
	#about, .index-right p {
		color: var(--pure-white);
	}
	p {
		line-height: 2rem;
		margin: 2rem 0;
	}
	.index-right p {
		font-size: 1.2rem;
	}
	.about-us{
		min-height: 60vh;
		background-color: var(--primary-color);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: auto;
		background-attachment:fixed;
		padding: 50px 0 100px 0;

	}
	.about-img {
			margin: 1rem;
			width: 440px;
			max-width: 90%;
			border-radius: 3%;
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

		.about-img {
			margin-bottom: 3rem;
		}
}

@media screen and (max-width: 600px) {

}
</style>