# canvg

Fork of the JavaScript SVG parser and renderer on Canvas. It takes the URL to the SVG file or the text of the SVG file, parses it in JavaScript and renders the result on Canvas.

This is a fork of the original [canvg project](https://github.com/canvg/canvg) modified for use with the [VSDX Export for yFiles for HTML](https://www.yworks.com/products/yfiles/vsdx-export) from yWorks.

<a href="#quickstart">Quickstart</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#docs">Docs</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://canvg.js.org/demo/">Demo</a>
<br />
<hr />

## Quickstart

Install this library using your favorite package manager:

```sh
pnpm add canvg
# or
yarn add canvg
# or
npm i canvg
```

Then, just import `Canvg` and use it:

```js
import { Canvg } from 'canvg';

let v = null;

window.onload = async () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  v = await Canvg.from(ctx, './svgs/1.svg');

  // Start SVG rendering with animations and mouse handling.
  v.start();
};

window.onbeforeunload = () => {
  v.stop();
};
```

[Description of all exports you can find in Documentation.](https://canvg.js.org/api)

<br />

## Docs

- [Migration to v4](https://canvg.js.org/docs/migration-to-v4)
- [API](https://canvg.js.org/api/classes/Canvg)
- [Examples](https://canvg.js.org/examples)

## What's implemented?

The end goal is everything from the [SVG spec](http://www.w3.org/TR/SVG/). The majority of the rendering and animation is working. If you would like to see a feature implemented, don't hesitate to add it to the issues list, or better is to create pull request 😎
