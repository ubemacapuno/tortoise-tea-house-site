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
      width: 100%;
      height: 100%;
      object-fit: cover;
      flex-shrink: 0;
      opacity: 0;
      transition: opacity 1200ms ease-out;
    }
    img.loaded {
      opacity: 1;
    }

    @media (max-width: 475px) {
    img{
      border-radius: 4px;
      
    }

   }
  </style>
  
  <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />