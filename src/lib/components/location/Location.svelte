<script context="module">
	export const prerender = true;
</script>
<div class="contact-component">
    <div class="opaque">
        <section class="page-wrapper">
                <!-- Location -->
                <div class="location-header">
                    <h2 id="location">Location</h2>
                    <a
                    title="See us on Google Maps"
                    href="https://goo.gl/maps/V7PwfwcMZjwaKAuP8"  
                    target="_blank" 
                    rel="noopener noreferrer"
                ><p class="location-card">2418 E Greenway Rd Phoenix, AZ 85032</p></a>
                </div>

                <div class ="map-responsive"> 
                    <iframe class="google-map" title="Tortoise Tea House Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.171278907392!2d-112.03207368255615!3d33.6268007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b71f423abf939%3A0x46649beea052a281!2s2418%20E%20Greenway%20Rd%2C%20Phoenix%2C%20AZ%2085032!5e0!3m2!1sen!2sus!4v1656612628486!5m2!1sen!2sus" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </section>
    </div>
</div>

<style>
.opaque{
    background-color: rgba(0, 0, 0, 0.3);
}
    
h2{
    color: var(--pure-white);
    margin: 1rem 0 1rem 0;
}

a{
    color: var(--pure-white);
    font-weight: bold;
    transition: all 0.2s;
    letter-spacing: 1px;
	}
p{
    text-align: center;
    margin-bottom: 2rem;
}
a:hover{
		color: var(--text-color);
	}
.contact-component{
    background-color: var(--secondary-color);
    background-image: url("$lib/images/background/desert-background2.jpg");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment:scroll;
    height: 100%;
	
}

.location-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.map-responsive {
    width: 100%;
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