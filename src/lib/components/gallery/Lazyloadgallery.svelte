<script>
import ImageLoader from '$lib/components/image/ImageLoader.svelte';
import Caramel from '$lib/images/gallery/gallery-caramel-macchiato.jpg'
import Combo2 from '$lib/images/gallery/gallery-combo-2.jpg'
import Combo3 from '$lib/images/gallery/gallery-combo-3.jpg'
import HouseMilk from '$lib/images/gallery/gallery-house-milk-tea-with-boba.jpg'
import Mangonada from '$lib/images/gallery/gallery-mangonada.jpg'
import Taro from '$lib/images/gallery/gallery-mashed-taro-with-jasmine-milk-tea.jpg'
import Mocha from '$lib/images/gallery/gallery-mocha-latte.jpg'
import Passionfruit from '$lib/images/gallery/gallery-super-passion-fruit.jpg'

</script>
<div class="gallery-component">
    <h2>Gallery</h2>
    <div class="photo-grid">
        <div class="card card4"><ImageLoader src={Combo3} alt="Our image"></ImageLoader></div>
        <div class="card card6"><ImageLoader src={Mangonada} alt="Our image"></ImageLoader></div>
        <div class="card card1"><ImageLoader src={Caramel} alt="Our image"></ImageLoader></div>
        <div class="card card5"><ImageLoader src={HouseMilk} alt="Our image"></ImageLoader></div>
        <div class="card card7"><ImageLoader src={Taro} alt="Our image"></ImageLoader></div>
        <div class="card card8"><ImageLoader src={Mocha} alt="Our image"></ImageLoader></div>
        <div class="card card9"><ImageLoader src={Passionfruit} alt="Our image"></ImageLoader></div>
        <div class="card card3 card-wide"><ImageLoader src={Combo2} alt="Our image"></ImageLoader></div>
    </div>
</div>


<style>
    .gallery-component{
        padding: 100px 0;
    }
    h2{
        text-align: center;
        margin-top: 0;
    }
/* Reference photo grid documentation: https://github.com/fireship-io/224-animated-css-grid */
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--background-color);
        font-size: 3rem;
        color: #fff;
        box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        opacity: 0.95;
        transition: all 0.2s;
    }
    .card:hover{
        opacity: 1;
    }
    .photo-grid {
        margin: 2rem 0;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 2fr));
        grid-auto-rows: 300px;
    }


@media screen and (min-width: 600px) {
    /* use card-tall and card-wide accordingly with taller/wider images: */
  /* .card-tall {
    grid-row: span 2 / auto;
  } */
  .card-wide {
    grid-column: span 2 / auto;
  }
}

@media (max-width: 475px) {
    .photo-grid {
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
    }
   }
</style>