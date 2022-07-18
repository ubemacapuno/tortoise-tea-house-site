<script>
	// import Gallery from 'svelte-image-gallery'
</script>
<h2 id="photo-gallery">Photo Gallery</h2>
<div class = "photo-grid">
    <div class="card card3" alt="Tortoise Tea House Combo 3"></div>
    <div class="card card1 card-wide" alt="Tortoise Tea House Combo 1"></div>
    <div class="card card4" alt="House Milk Tea with Boba"></div>
    <div class="card card6" alt="Mangonada"></div>
    <div class="card card5" alt="Mashed Taro with Jasmine Milk Tea"></div>
    <div class="card card2 card-wide" alt="Tortoise Tea House Combo 2"></div>
    <div class="card card7" alt="Super Passion Fruit"></div>
</div>


<style>
    h2{
        text-align: center;
    }
/* Reference photo grid documentation: https://github.com/fireship-io/224-animated-css-grid */
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #353535;
        font-size: 3rem;
        color: #fff;
        box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        transition: all 500ms;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.95;
        transition: all 0.2s;
    }
    .card:hover{
        opacity: 1;
    }
    .photo-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 2fr));
        grid-auto-rows: 300px;
    }
    .card1{
        background-image: url("../../images/gallery/gallery-combo-1.jpg");
        background-position: center top;
    }
    .card2{
            background-image: url("../../images/gallery/gallery-combo-2.jpg");
    }
    .card3{
            background-image: url("../../images/gallery/gallery-combo-3.jpg");
    }
    .card4{
            background-image: url("../../images/gallery/gallery-house-milk-tea-with-boba.jpg");
    }
    .card5{
            background-image: url("../../images/gallery/gallery-mashed-taro-with-jasmine-milk-tea.jpg");
            background-position: 0 68%;
    }
    .card6{
            background-image: url("../../images/gallery/gallery-mangonada.jpg");
            background-position: 0 60%;
    }
    .card7{
            background-image: url("../../images/gallery/gallery-super-passion-fruit.jpg");
            background-position: 0 5%;
    }

@media screen and (min-width: 600px) {
    /* use card-tall and card-wide accordingly with taller/wider images: */
  .card-tall {
    grid-row: span 2 / auto;
  }
  .card-wide {
    grid-column: span 2 / auto;
  }
}
</style>