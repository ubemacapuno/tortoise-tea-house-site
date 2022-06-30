<script lang="ts">
	import Icon from '$lib/icons/Icon.svelte';
	import logoImg from '$lib/components/header/placeholder-logo.svg'
	import { page } from '$app/stores';
	export let isMenuOpen = false;
	const closeMenu = () => (isMenuOpen = false);

    // This code below allows for smooth scrolling to ID on click
  	const scrollToElement = (selector: any) => {
    	const element = document.querySelector(selector);
    	if (!element) return;

		let position = element.getBoundingClientRect().top;
		let offset = position + window.pageYOffset;
		window.scrollTo({
		top: offset,
		behavior: 'smooth',
		});
	};
	// End code for smooth scrolling to ID on click
</script>

<div class="header">
	<div class="logo">
		<a sveltekit:prefetch href="/">
			<img class="logo-img" src={logoImg} alt="Placeholder" />
		</a>
	</div>
	<div class="hamburger-menu">
		<button class="menu-icon" on:click={() => (isMenuOpen = !isMenuOpen)}>
			<Icon name="hamburger" color="white" />
		</button>
	</div>
</div>

<aside class="mobile-menu-wrapper" class:isMenuOpen>
	<div class="mobile-menu">
		<div class="hamburger-menu">
			<button class="menu-icon close" on:click={closeMenu}>
				<Icon name="close" color="white" />
			</button>
		</div>
		<nav class="mobile-nav">
			<ul>
                <li><a href={'#'} on:click|preventDefault={() => scrollToElement('#menu')} on:click={closeMenu}>Menu</a></li>
				<li><a href={'#'} on:click|preventDefault={() => scrollToElement('#about')} on:click={closeMenu}>About</a></li>
				<li><a href={'#'} on:click|preventDefault={() => scrollToElement('#contact')} on:click={closeMenu}>Contact</a></li>
			</ul>
		</nav>
	</div>
</aside>

<style>
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.hamburger-menu {
		padding: 0px 20px 0px 0px;
	}
	.header {
		background-color: var(--primary-color);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		padding: 10px 0px 10px 70px;
		object-fit: contain;
		width: 30px;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mobile-menu-wrapper {
		position: fixed;
		top: 0;
		left: -100%;
		transition: left 0.3s ease-in-out;
		align-items: center;
		height: 100vh;
		overflow-y: hidden;
		z-index: 100;
		width: 100%;
	}
	.menu-icon {
		border: none;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.close {
		margin: 20px 20px;
	}
	.mobile-menu {
		padding: var(--gap-largest);
		background-color: var(--secondary-color);
		height: 100vh;
		width: 100vw;
		overflow-y: scroll;
		margin-right: 1rem;
		z-index: 100;
	}
	li {
		list-style: none;
		display: block;
		margin: 30px 0;
		font-weight: 400;
		font-size: var(--h4);
	}
	.isMenuOpen {
		left: 0;
	}


    @media (min-width: 450px) {
        .header {
            display: none;
        }
    }

    @media (max-width: 450px) {
       
        .mobile-menu-wrapper {
		    overflow-y: visible;
             /*"overflow-y: visible;" is a work-around. 
             Without it, when the mobile menu is opened,
             the HORIZONTAL scrollbar is visible; this code hides it. */
	    }
    }


</style>