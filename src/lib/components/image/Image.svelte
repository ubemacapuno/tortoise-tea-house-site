<script>
    export /**
* @type {string | null | undefined}
*/
     let src
    export /**
* @type {string | null | undefined}
*/
     let alt
  
    import { onMount } from 'svelte'
  
    let loaded = false
    /**
* @type {HTMLImageElement}
*/
    let thisImage
  
    onMount(() => {
      thisImage.onload = () => {
        loaded = true
      }
    }) 
  
  </script>
  
  <style>
    img {
      width: 80px;
      height: 80px;
      /* outline: solid var(--primary-color); */
      flex-shrink: 0;
      object-fit: cover;
      margin-right: 1.5em;
      opacity: 0;
      transition: opacity 1200ms ease-out;
    }
    img.loaded {
      opacity: 1;
    }
  </style>
  
  <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />