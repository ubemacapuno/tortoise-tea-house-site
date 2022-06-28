var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../chunks/index-1259f1f6.js");
var app = /* @__PURE__ */ (() => "\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\n/*         */\n/* CSS RESET */\n/*         */\nhtml {font-size: 100%;}\n/*16px*/\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n	margin: 0;\r\n	padding: 0;\r\n	border: 0;\r\n	font-size: 100%;\r\n	font: inherit;\r\n	vertical-align: baseline;\r\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n	display: block;\r\n}\nbody {\r\n	line-height: 1;\r\n}\nol, ul {\r\n	list-style: none;\r\n}\nblockquote, q {\r\n	quotes: none;\r\n}\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n	content: '';\r\n	content: none;\r\n}\ntable {\r\n	border-collapse: collapse;\r\n	border-spacing: 0;\r\n}\n/*         */\n/* END CSS RESET */\n/*         */\n:root {\r\n	font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\r\n		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n	--font-mono: 'Fira Mono', monospace;\r\n	--pure-white: #ffffff;\r\n	--primary-color: #25623d;\r\n	--secondary-color: #FFE5D9;\r\n	--tertiary-color: #FFCAD4;\r\n	--accent-color: #F4ACB7;\r\n	--secondary-accent-color: #9D8189;\r\n	--heading-color: rgba(0, 0, 0, 0.7);\r\n	--text-color: #444444;\r\n	--background-without-opacity: rgba(255, 255, 255, 0.7);\r\n	--column-width: 42rem;\r\n	--column-margin-top: 4rem;\r\n}\nhtml {\r\n	height: 100%;\r\n	box-sizing: border-box;\r\n}\n*,\r\n*::before,\r\n*::after {\r\n	box-sizing: border-box;\r\n}\np {\r\n	margin-bottom: 1rem;\r\n}\na {\r\n	text-decoration: none;\r\n}\nh1, h2, h3, h4, h5 {\r\n  margin: 3rem 0 1.38rem;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.3;\r\n}\nh1 {\r\n  margin-top: 0;\r\n  font-size: 3.052rem;\r\n}\nh2 {font-size: 2.441rem;}\nh3 {font-size: 1.953rem;}\nh4 {font-size: 1.563rem;}\nh5 {font-size: 1.25rem;}\nsmall, .text_small {font-size: 0.8rem;}\n/*         */\n/* Media Query */\n/*         */\n@media (max-width: 300px) {\r\n	h5 {\r\n		font-size: 1rem;\r\n	}\r\n}\n@media (min-width: 900px) {\r\n	h1 {\r\n		font-size: 4.8rem;\r\n	}\r\n	h2 {\r\n		font-size: 3rem;\r\n	}\r\n	h3 {\r\n		font-size: 2rem;\r\n	}\r\n	h4 {\r\n		font-size: 1.8rem;\r\n	}\r\n	h5 {\r\n		font-size: 1.4rem;\r\n	}\r\n}\n/*         */\n/* Utility */\n/*         */\n.page-wrapper {\r\n	padding: 0 20px 20px;\r\n	margin: 0 auto;\r\n	max-width: 1200px;\r\n}\n/*              */\n/* Menu Styling */\n/*              */\n.menu {\r\n	font-size: 14px;\r\n}\n.menu-group-heading {\r\n	margin: 0;\r\n	padding-bottom: 1em;\r\n	border-bottom: 2px solid #ccc;\r\n}\n.menu-group {\r\n	display: grid;\r\n	grid-template-columns: 1fr; \r\n	/*single column layout for mobile */\r\n	gap: 1.5em;\r\n	padding: 1.5em 0;\r\n}\n.menu-item {\r\n	display: flex;\r\n}\n.menu-item-image {\r\n	width: 80px;\r\n	height: 80px;\r\n	outline: solid coral; /*outline for testing*/\r\n	flex-shrink: 0;\r\n	object-fit: cover;\r\n	margin-right: 1.5em;\r\n}\n.menu-item-text {\r\n	flex-grow: 1;\r\n}\n.menu-item-heading {\r\n	display: flex;\r\n	justify-content: space-between;\r\n	margin: 0;\r\n}\n.menu-item-name {\r\n	margin-right: 1.5em;\r\n	font-weight: bold;\r\n}\n.menu-item-description {\r\n	line-height: 1.6em;\r\n}\n@media screen and (min-width: 900px) {\r\n	.menu {\r\n		font-size: 16px;\r\n	}\r\n\r\n	.menu-group {\r\n		grid-template-columns: repeat(2, 1fr); /* use grid for 2 evenly sized columns for desktop */\r\n	}\r\n\r\n	.menu-item-image {\r\n		width: 125px;\r\n		height: 125px;\r\n	}\r\n}\n/*                     */\n/* End of Menu Styling */\n/*                     */")();
var Hero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".hero-component.svelte-wou6kh{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){.hero-component.svelte-wou6kh{padding:40px 0}}")();
const css$3 = {
  code: ".hero-component.svelte-wou6kh{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){.hero-component.svelte-wou6kh{padding:40px 0}}",
  map: null
};
const Hero = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"hero-component svelte-wou6kh"}"><p>This is the hero component</p>
</section>`;
});
var Yelp = "/_app/immutable/assets/socials-yelp-8718eb3a.svg";
var Instagram = "/_app/immutable/assets/socials-instagram-e289a92f.svg";
var Facebook = "/_app/immutable/assets/socials-facebook-511035d2.svg";
var Contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".contact-component.svelte-qsahef{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background-color:var(--secondary-color)\r\n	}.icons.svelte-qsahef{display:flex;margin:1rem}.icon.svelte-qsahef{margin:1rem}@media(min-width: 480px){.contact-component.svelte-qsahef{padding:40px 0}.google-map.svelte-qsahef{width:200px}}")();
const css$2 = {
  code: ".contact-component.svelte-qsahef{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background-color:var(--secondary-color)\r\n	}.icons.svelte-qsahef{display:flex;margin:1rem}.icon.svelte-qsahef{margin:1rem}@media(min-width: 480px){.contact-component.svelte-qsahef{padding:40px 0}.google-map.svelte-qsahef{width:200px}}",
  map: null
};
const Contact = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"contact-component svelte-qsahef"}"><section><h2>Contact</h2>
		
		

		<ul class="${"icons svelte-qsahef"}"><li><a class="${"icon svelte-qsahef"}" target="${"_blank"}" href="${"https://www.facebook.com/tortoiseteahouse"}"><img${(0, import_index_1259f1f6.a)("src", Facebook, 0)} alt="${"Facebook Logo"}"></a></li>
			<li><a class="${"icon svelte-qsahef"}" target="${"_blank"}" href="${"https://www.instagram.com/tortoiseteahouse/"}"><img${(0, import_index_1259f1f6.a)("src", Instagram, 0)} alt="${"Instagram Logo"}"></a></li>
			<li><a class="${"icon svelte-qsahef"}" target="${"_blank"}" href="${"https://www.yelp.com/biz/tortoise-tea-house-phoenix"}"><img${(0, import_index_1259f1f6.a)("src", Yelp, 0)} alt="${"YelpLogo"}"></a></li></ul>

		<p>Let us know how we&#39;re doing!</p>
		
		

		<form name="${"test"}" method="${"post"}" netlify netlify-honeypot="${"bot-field"}" action="${"/success"}"><input type="${"hidden"}" name="${"form-name"}" value="${"test"}">
			<input type="${"text"}" name="${"bot-field"}">
			<p><label>Your Name: <input type="${"text"}" name="${"name"}"></label></p>
			<p><label>Your Email: <input type="${"email"}" name="${"email"}"></label></p>
			<p><label>Message: <textarea name="${"message"}"></textarea></label></p>
			<p><button type="${"submit"}">Send</button></p></form>

		<h2>Location</h2>

		<iframe class="${"google-map svelte-qsahef"}" title="${"Tortoise Tea House Map"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1711074002183!2d-112.03207368448756!3d33.62680514747617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b71694f8c3039%3A0x4e2e84a8cf815fcc!2sTortoise%20Tea%20House!5e0!3m2!1sen!2sus!4v1656351306191!5m2!1sen!2sus"}" width="${"220"}" height="${"180"}" style="${"border:0;"}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></section>
</section>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".footer-section.svelte-psdw5j{background-color:var(--primary-color)}footer.svelte-psdw5j{display:flex;flex-direction:column;align-items:center;padding:40px;text-align:center;color:var(--pure-white)}.copyright.svelte-psdw5j{margin:1rem 0 0 0;color:var(--tertiary-color)}@media(min-width: 480px){footer.svelte-psdw5j{padding:40px 0}}")();
const css$1 = {
  code: ".footer-section.svelte-psdw5j{background-color:var(--primary-color)}footer.svelte-psdw5j{display:flex;flex-direction:column;align-items:center;padding:40px;text-align:center;color:var(--pure-white)}.copyright.svelte-psdw5j{margin:1rem 0 0 0;color:var(--tertiary-color)}@media(min-width: 480px){footer.svelte-psdw5j{padding:40px 0}}",
  map: null
};
const Footer = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `
<section class="${"footer-section svelte-psdw5j"}"><section><footer class="${"svelte-psdw5j"}"><p>(602) 612-2363</p>
			<p>2418 E Greenway Rd Phoenix, AZ 85032</p>
			<p class="${"copyright svelte-psdw5j"}">\xA9 2022 Tortoise Tea House</p></footer></section>
</section>`;
});
var logo = "/_app/immutable/assets/placeholder-logo-eda9c675.svg";
var Phone = "/_app/immutable/assets/phone-9940e229.svg";
var largeLogo = "/_app/immutable/assets/placeholder-logo-big-38058311.svg";
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "header.svelte-nscwtt.svelte-nscwtt{display:flex;flex-direction:column;padding:0;margin:0;width:100%;height:100vh;background-color:var(--secondary-color)}.wrapper.svelte-nscwtt.svelte-nscwtt{margin-bottom:100px}.header-top.svelte-nscwtt.svelte-nscwtt{display:flex;flex-direction:row;justify-content:space-evenly;background-color:var(--primary-color)}.header-body.svelte-nscwtt.svelte-nscwtt{display:flex;flex-direction:column;justify-content:space-between;align-items:center}h2.svelte-nscwtt.svelte-nscwtt,p.svelte-nscwtt.svelte-nscwtt{text-align:center}h2.svelte-nscwtt.svelte-nscwtt{background-color:white;margin:1rem}.large-logo.svelte-nscwtt.svelte-nscwtt{max-width:180px;margin-bottom:16px}.corner.svelte-nscwtt.svelte-nscwtt{width:3em;height:3em}.corner.svelte-nscwtt a.svelte-nscwtt{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.location-card.svelte-nscwtt.svelte-nscwtt{background-color:var(--primary-color);color:white}.location-card.svelte-nscwtt.svelte-nscwtt::before{content:url('/_app/immutable/assets/location-pin-60a7e739.svg')}span.svelte-nscwtt.svelte-nscwtt{margin-top:1rem;color:black}.card-detail.svelte-nscwtt.svelte-nscwtt{border:1px solid black;border-radius:10px;width:250px;padding:5px;margin:10px;background-color:white}.card-detail-alternate.svelte-nscwtt.svelte-nscwtt{border:1px solid black;border-radius:10px;width:250px;padding:5px;margin:10px;background-color:var(--primary-color)}.corner.svelte-nscwtt img.svelte-nscwtt{width:2em;height:2em;object-fit:contain}.phone-btn.svelte-nscwtt.svelte-nscwtt{display:flex;align-items:center;flex-direction:column;width:250px;justify-content:space-around;margin:10px}nav.svelte-nscwtt.svelte-nscwtt{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-nscwtt.svelte-nscwtt{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-nscwtt.svelte-nscwtt{position:relative;height:100%}nav.svelte-nscwtt a.svelte-nscwtt{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-nscwtt.svelte-nscwtt:hover,img.svelte-nscwtt.svelte-nscwtt:hover{color:var(--accent-color)}")();
const css = {
  code: "header.svelte-nscwtt.svelte-nscwtt{display:flex;flex-direction:column;padding:0;margin:0;width:100%;height:100vh;background-color:var(--secondary-color)}.wrapper.svelte-nscwtt.svelte-nscwtt{margin-bottom:100px}.header-top.svelte-nscwtt.svelte-nscwtt{display:flex;flex-direction:row;justify-content:space-evenly;background-color:var(--primary-color)}.header-body.svelte-nscwtt.svelte-nscwtt{display:flex;flex-direction:column;justify-content:space-between;align-items:center}h2.svelte-nscwtt.svelte-nscwtt,p.svelte-nscwtt.svelte-nscwtt{text-align:center}h2.svelte-nscwtt.svelte-nscwtt{background-color:white;margin:1rem}.large-logo.svelte-nscwtt.svelte-nscwtt{max-width:180px;margin-bottom:16px}.corner.svelte-nscwtt.svelte-nscwtt{width:3em;height:3em}.corner.svelte-nscwtt a.svelte-nscwtt{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.location-card.svelte-nscwtt.svelte-nscwtt{background-color:var(--primary-color);color:white}.location-card.svelte-nscwtt.svelte-nscwtt::before{content:url('$lib/images/location/location-pin.svg')}span.svelte-nscwtt.svelte-nscwtt{margin-top:1rem;color:black}.card-detail.svelte-nscwtt.svelte-nscwtt{border:1px solid black;border-radius:10px;width:250px;padding:5px;margin:10px;background-color:white}.card-detail-alternate.svelte-nscwtt.svelte-nscwtt{border:1px solid black;border-radius:10px;width:250px;padding:5px;margin:10px;background-color:var(--primary-color)}.corner.svelte-nscwtt img.svelte-nscwtt{width:2em;height:2em;object-fit:contain}.phone-btn.svelte-nscwtt.svelte-nscwtt{display:flex;align-items:center;flex-direction:column;width:250px;justify-content:space-around;margin:10px}nav.svelte-nscwtt.svelte-nscwtt{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-nscwtt.svelte-nscwtt{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-nscwtt.svelte-nscwtt{position:relative;height:100%}nav.svelte-nscwtt a.svelte-nscwtt{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-nscwtt.svelte-nscwtt:hover,img.svelte-nscwtt.svelte-nscwtt:hover{color:var(--accent-color)}",
  map: null
};
const Header = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"wrapper svelte-nscwtt"}"><div class="${"header-top svelte-nscwtt"}"><div class="${"corner svelte-nscwtt"}"><a href="${"/"}" class="${"svelte-nscwtt"}"><img${(0, import_index_1259f1f6.a)("src", logo, 0)} alt="${"Tortoise Tea House Logo"}" class="${"svelte-nscwtt"}"></a></div>
		<nav class="${"svelte-nscwtt"}"><ul class="${"svelte-nscwtt"}"><li class="${"svelte-nscwtt"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-nscwtt"}">Menu</a></li>
				<li class="${"svelte-nscwtt"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-nscwtt"}">About</a></li>
				<li class="${"svelte-nscwtt"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-nscwtt"}">Contact</a></li></ul></nav></div>

	<div class="${"header-body svelte-nscwtt"}"><h2 class="${"svelte-nscwtt"}">Tortoise Tea House</h2>
		<img class="${"large-logo svelte-nscwtt"}"${(0, import_index_1259f1f6.a)("src", largeLogo, 0)} alt="${"Tortoise Tea House Logo - Large"}">

		
		
		<p class="${"card-detail svelte-nscwtt"}">Wed - Sun: 12pm  - 8pm</p>
		<p class="${"card-detail svelte-nscwtt"}">Closed Tuesday</p>
		<a class="${"card-detail-alternate svelte-nscwtt"}" title="${"See us on Google Maps"}" href="${"https://goo.gl/maps/V7PwfwcMZjwaKAuP8"}"><p class="${"location-card svelte-nscwtt"}">2418 E Greenway Rd Phoenix, AZ 85032</p></a>
		
		<a href="${"tel:1-602-612-2363"}" class="${"phone-btn svelte-nscwtt"}" title="${"Give us a call!"}"><img class="${"fas fa-phone-alt svelte-nscwtt"}"${(0, import_index_1259f1f6.a)("src", Phone, 0)} alt="${"Tortoise Tea House Phone"}" aria-hidden="${"true"}">
			<span class="${"phone-number svelte-nscwtt"}">(602) 612-2363</span></a></div>
</header>`;
});
const _layout = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_1259f1f6.v)(Header, "Header").$$render($$result, {}, {}, {})}
${(0, import_index_1259f1f6.v)(Hero, "Hero").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${(0, import_index_1259f1f6.v)(Contact, "Contact").$$render($$result, {}, {}, {})}
${(0, import_index_1259f1f6.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
