<script>
    //Testing for lazyloading component below (ImageLoader, test images):
    import ImageLoader from '$lib/components/image/ImageLoader.svelte';
    import Test2 from '$lib/images/menu/test2.jpg'
    import Test3 from '$lib/images/menu/test3.jpg'
</script>

<section class=page-wrapper-menu>
        <div class="menu">
            <h3 class="menu-group-heading">
                Coffee
            </h3>

            <div class="menu-group">
                <!--Menu items Below-->

                <div class="menu-item">
                    <img class="menu-item-image" src="" alt="Iced Caffe Americano">
                    <div class="comp-container">
                        <ImageLoader src={Test3} alt="Our image"></ImageLoader>
                    </div>
                    <div class="menu-item-text">
                        <h5 class="menu-item-heading">
                            <span class="menu-item-name">Iced Caffe Americano</span>
                            <span class="menu-item-price">3.00</span>
                        </h5>
                    </div>
                </div>                 
            
                <div class="menu-item">
                    <!-- <img class="menu-item-image" src="" alt="Iced Caramel Macchiato"> -->
                    <div class="comp-container">
                        <ImageLoader src={Test2} alt="Our image"></ImageLoader>
                    </div>
                    <div class="menu-item-text">
                        <h5 class="menu-item-heading">
                            <span class="menu-item-name">Iced Caramel Macchiato</span>
                            <span class="menu-item-price">4.00</span>
                        </h5>
                    </div>
                </div>                 
            
                <div class="menu-item">
                    <img class="menu-item-image" src="" alt="Iced Vanilla Latte">
                    <!-- <ImageLoader src={Test1} alt="Our image"></ImageLoader> -->
                    <div class="menu-item-text">
                        <h5 class="menu-item-heading">
                            <span class="menu-item-name">Iced Vanilla Latte</span>
                            <span class="menu-item-price">4.00</span>
                        </h5>
                    </div>
                </div>                 
        
                <div class="menu-item">
                    <img class="menu-item-image" src="" alt="Iced Mocha Latte">
                    <!-- <ImageLoader src={Test4} alt="Our image"></ImageLoader> -->
                    <div class="menu-item-text">
                        <h5 class="menu-item-heading">
                            <span class="menu-item-name">Iced Mocha Latte</span>
                            <span class="menu-item-price">4.00</span>
                        </h5>
                    </div>
                </div>                     
            </div>
        </div>
</section>
<style>
    .comp-container{
        display: none;
        width: 80px;
        height: 80px;
        margin-right: 1.5em;
    }
</style>