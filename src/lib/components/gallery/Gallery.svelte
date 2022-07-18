<script>
	import Gallery from 'svelte-image-gallery'
    import gallery1 from '$lib/images/gallery/gallery-combo-1.jpg'
    import gallery2 from '$lib/images/gallery/gallery-combo-2.jpg'
    import gallery3 from '$lib/images/gallery/gallery-combo-3.jpg'
    import houseMilk from '$lib/images/gallery/gallery-house-milk-tea-with-boba.jpg'
    import mangonada from '$lib/images/gallery/gallery-mangonada.jpg'
    import mashedTaro from '$lib/images/gallery/gallery-mashed-taro-with-jasmine-milk-tea.jpg'
    import superPassionFruit from '$lib/images/gallery/gallery-super-passion-fruit.jpg'
    import wall from '$lib/images/gallery/gallery-wall.jpg'

</script>
<div class="gallery-wrapper">
    <h2>Photo Gallery</h2>
    <section class="gallery">
        <Gallery gap="10" maxColumnWidth="150">
            <img src={gallery3} alt="">
            <img src={gallery1} alt="">
            <img src={gallery2} alt="">
            <img src={houseMilk} alt="">
            <img src={mashedTaro} alt="">
            <img src={superPassionFruit} alt="">
            <img src={wall} alt="">
            <img src={mangonada} alt="">
        </Gallery>
    </section>
</div>

<style>
	:global(img) { opacity: .9; transition: all .2s }
	:global(img):hover { opacity: 1; transform: scale(1.04) }
    .gallery-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1200px;
    }

</style>