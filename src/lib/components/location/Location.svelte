<script context="module">
	export const prerender = true;
</script>

<section class="page-wrapper">
    <section class="contact-component">
            <!-- Location -->
            <div class="location-header">
                <h2 id="location">Location</h2>
                <p class="location-card">2418 E Greenway Rd Phoenix, AZ 85032</p>
            </div>

            <div class ="map-responsive"> 
                <iframe class="google-map" title="Tortoise Tea House Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.171278907392!2d-112.03207368255615!3d33.6268007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b71f423abf939%3A0x46649beea052a281!2s2418%20E%20Greenway%20Rd%2C%20Phoenix%2C%20AZ%2085032!5e0!3m2!1sen!2sus!4v1656612628486!5m2!1sen!2sus" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </section>
</section>

<style>
.location-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.map-responsive {
    /* width: 100%; */
    max-width: 600px;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    margin: 0 auto;
}

.map-responsive iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
}
	
</style>