## tortoise-tea-house-site (Work in Progress): <a target="_blank" href="https://tortoiseteahouse.netlify.app/">Live Site</a>

This website is for the Tortoise Tea House shop in Phoenix, AZ.

 <tr>
    <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/tortoise-tea-house-site.jpg?raw=true" width="100%"  alt="Tortoise Tea House website."/>
    </td>
  </tr>

## How It's Made:

**Tech used:** 

Svelte/SvelteKit, JavaScript/HTML/CSS

Please be sure to checkout [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), and install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run dev
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn dev
```
## Lessons Learned:
Incorporated lazy-loading on the gallery images. If the main image has not yet finished loading, then a placeholder image will be displayed. If the image is loaded, then the loaded image will then display.

## Optimizations:
Incorporate intersection-observer on the gallery image, so that loading occurs first on images that are currently in-view by the user.