{#if loaded}
	<img class="loaded-image" {src} alt="Document" />
{:else if failed}
	<img width=100% height=100% class="loader-image" src={Tortoise} alt="404 Not found." />
{:else if loading}
	<img width=100% height=100% class="loader-image" src={Tortoise} alt="Loading..." />
{/if}

<script>
	import Tortoise from '$lib/images/icons/tortoise.svg'
	import { onMount } from 'svelte'
	export let src;

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
			const img = new Image();
			img.src = src;
			loading = true;

			img.onload = () => {
					loading = false;
					loaded = true;
			};
			img.onerror = () => {
					loading = false;
					failed = true;
			};
	})
</script>
<style>
	.loader-image{
		background-color: var(--primary-color);      	
		opacity: 0.5;
	}

	.loader-image, .loaded-image{
		width: 100%;
		height: 100%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.loaded-image{
		width: 100%;
		height: 100%;
		object-fit: cover;
		flex-shrink: 0;
		transition: opacity 1200ms ease-out;
		opacity: 1;

	}
</style>