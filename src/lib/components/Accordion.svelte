<script>
    import { slide } from "svelte/transition";
    export let title = ''
    let isOpen = false
    const toggle = () => isOpen = !isOpen
  </script>
  
  <button on:click={toggle}><span class:isOpen>𓆉</span>{title}</button>
  {#if isOpen}
  <div transition:slide>
    <div class="wrapper">
        <slot />
    </div>
</div>
  {/if}
  
<style>
    button{
      transition: 0.3s;
    }

    button:hover {
      color: var(--primary-color);
    }

    span {
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.5turn);
		transition: transform 0.3s ease;
	}

	.isOpen {
		transform: rotate(0.75turn);
    }

    .wrapper {
		padding: 20px;
	}

    button {
      display: flex;
      justify-content: left;
      margin-top: 50px;
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font-size: 1.5rem;
      cursor: pointer;
      outline: inherit;  
    }

</style>