<script lang="ts">
	let copyrightYear = new Date().getFullYear() 
	import Icon from '$lib/icons/Icon.svelte';
    import Facebook from '$lib/images/socials/socials-facebook.svg'
	import Instagram from '$lib/images/socials/socials-instagram.svg'
	import Yelp from '$lib/images/socials/socials-yelp.svg'
	import PhoneCircle from '$lib/images/icons/phone-circle.svg'
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
		<button class="menu-icon corner-icon phone-main">
			<a title="Call us at 1-602-612-2363" href="tel:+16026122363"><img class="social-icon" src={PhoneCircle} alt="Facebook Logo"></a>
		</button>
		<button class="menu-icon corner-icon hamburger" on:click={() => (isMenuOpen = !isMenuOpen)}>
			<Icon name="hamburger" color=var(--primary-color) />
		</button>
</div>
<aside class="mobile-menu-wrapper" class:isMenuOpen>
	<div class="mobile-menu">
		<div class="hamburger-menu">
			<button class="menu-icon corner-icon phone-mobile">
				<a title="Call us at 1-602-612-2363" href="tel:+16026122363"><img class="social-icon" src={PhoneCircle} alt="Facebook Logo"></a>
			</button>
			<button class="menu-icon close" on:click={closeMenu}>
				<Icon name="close" color=var(--pure-white) />
			</button>
		</div>
		<nav class="mobile-nav">
			<ul>
                <!-- The following anchors below will use smooth scrolling to get to their respective element IDs -->
				<li class="page-link"><a href={'#'} on:click|preventDefault={() => scrollToElement('#about')} on:click={closeMenu}>About</a></li>
                <li class="page-link"><a href={'#'} on:click|preventDefault={() => scrollToElement('#menu')} on:click={closeMenu}>Menu</a></li>
				<li class="page-link"><a href={'#'} on:click|preventDefault={() => scrollToElement('#contact')} on:click={closeMenu}>Contact</a></li>
                <li class="page-link"><a href={'#'} on:click|preventDefault={() => scrollToElement('#location')} on:click={closeMenu}>Phone & Location</a></li>
			</ul>
		</nav>
        <div class="mobile-socials">
            <ul class="icons">
                <li><a target="_blank" href="https://www.facebook.com/tortoiseteahouse"><img class="social-icon" src={Facebook} alt="Facebook Logo"></a></li>
                <li><a target="_blank" href="https://www.instagram.com/tortoiseteahouse/"><img class="social-icon" src={Instagram} alt="Instagram Logo"></a></li>
                <li><a class="social-icon" target="_blank" href="https://www.yelp.com/biz/tortoise-tea-house-phoenix"><img class="social-icon"src={Yelp} alt="YelpLogo"></a></li>
            </ul>
			<div class="copyright-container">
				<p class="copyright">© {copyrightYear} Tortoise Tea House</p>
			</div>
        </div>
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
	.hamburger-menu{
		display: flex;
		justify-content: space-between;
	}

	.header {
		background-color: var(--background-color);
		display: flex;
		justify-content: space-between;
	}

	.menu-icon {
		border: none;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		padding: 1rem 1rem;
		margin: 0 auto;
	}

	.corner-icon {
		margin: 0;
	}
	.hamburger {
		margin: 0;
		padding-top: 0;
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
		margin: 0;
		padding: 1rem 1rem 0 0;
		height: 3rem;
	}
	.mobile-menu {
		padding: var(--gap-largest);
		background-color: var(--primary-color);
		height: 100vh;
		width: 100vw;
		overflow-y: scroll;
		margin-right: 1rem;
		z-index: 100;
	}
    ul{
        margin-left: 50px;

    }
	li {
		list-style: none;
		display: block;
		margin: 35px 0;
		font-weight: 400;
		font-size: var(--h4-font-size);
	}
	.page-link{
		border-bottom: 1px solid var(--pure-white)
	}
    a {
        color: var(--pure-white)
    }
    .mobile-socials{
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
    }
	.isMenuOpen {
		left: 0;
	}
	.icons{
		display: flex;
		justify-content: space-around;
		margin: 0 auto;
		padding-bottom: 70px;
	}
	.copyright{
		text-align: center;
		color: var(--pure-white);
		position: relative;
		bottom: 25px;
	}

/* Media Queries */
    @media (min-width: 451px) {
        .header {
            display: none;
        }
    }

    @media (max-width: 450px) {
       
        .mobile-menu-wrapper {
		    overflow-y: visible;
             /*"overflow-y: visible;" is a work-around. 
             Without it, when the mobile menu is opened,
             a HORIZONTAL scrollbar is visible on the mobile menu; 
			 this code hides that scrollbar. */
	    }
    }
</style>