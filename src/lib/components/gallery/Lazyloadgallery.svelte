<script>
    import ImageLoader from '$lib/components/image/ImageLoader.svelte';
    import Test1 from '$lib/images/gallery/gallery-combo-1.jpg';
    import Test2 from '$lib/images/gallery/gallery-combo-2.jpg';
    import Test3 from '$lib/images/gallery/gallery-combo-3.jpg';

</script>
<body>
    <div class="gallery">
        <div class="gallery-item">
            <ImageLoader src={Test1} alt="Our image"></ImageLoader>
        </div>
    </div>

    <div class="gallery">
        <div class="gallery-item">
            <ImageLoader src={Test2} alt="Our image"></ImageLoader>
        </div>
    </div>

    <div class="gallery">
        <div class="gallery-item">
            <ImageLoader src={Test3} alt="Our image"></ImageLoader>
        </div>
    </div>
</body>
	
    
   
<style>
    body{
        margin:0;
    }

    .gallery{
        margin: 0 0.65rem;
    }

    .gallery-item{
        height: auto;
        margin: 0.5rem;
    }

    @media(min-width: 640px){
        .gallery{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(5,300px);
            grid-auto-flow: row dense;
        }

        .gallery-item{
            margin: 0.7rem;
        }

        .gallery-item:first-child{
            grid-row: span 1;
        }

        .gallery-item:nth-child(2){
            grid-column: 2/3;
            grid-row: span 2;
        }

    }

</style>