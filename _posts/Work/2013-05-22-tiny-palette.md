---
title: Tiny Palette
layout: work_entry
category: work

github: https://github.com/Cameron913/Tiny-Palette
behance: http://www.behance.net/gallery/Tiny-Palette/10174683
link:

gallery:
  - image: 1.png
    alt: TinyPalette color tool
  - image: 2.png
    alt: select the hex code
  - image: 3.png
    alt: close a swatch
  - image: 4.png
    alt: move and rearrange swatches
  - image: 5.png
    alt: add a new swatch
  - image: 6.png
    alt: move the palette around
---
Tiny Palette is an itty bitty bookmarklet for keeping a palette of colors in localStorage (per website) for quick reference. You can try it out by clicking <a href="javascript:(function()%7Bdocument.body.appendChild(document.createElement(%27script%27)).src%3D%27http://host.camerongarrett.com/Tiny-Palette/tiny-palette.js%27%3B%7D)()%3B">here</a> (it will appear at the top of your browser window).

1. Click the plus sign to add a color by hex code.
2. Drag the widget around your page by the textured bar.
3. Reorder swatches by dragging them.
4. Click the little minus sign in the bottom corner of a swatch to remove it.
5. Click on the hex color that shows up on hover to copy or change it.

The code for Tiny Palette can be found on [GitHub](https://github.com/Cameron913/Tiny-Palette).

Note: I just found a bug that prevents the dragging functionality from working in Firefox, currently working on a fix.
