---
title: Here Is A Test Of Markdown Styling
image: http://placekitten.com/600/260
image_alt: picture of a cat
layout: blog_entry
category: blog
published: true
---

# Test display of HTML elements

## This is 2nd level heading

This is a test paragraph.

### This is 3rd level heading

This is a test paragraph.

#### This is 4th level heading

This is a test paragraph.

##### This is 5th level heading

This is a test paragraph.

###### This is 6th level heading

This is a test paragraph.

## Basic block level elements

This is a normal paragraph (`p` element). To add some length to it, let us mention that this page was primarily written for testing the effect of **user style sheets**. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.

[Any Old Permalink](http://www.cs.tut.fi/~jkorpela/www/testel.html "Permalink to Test display of HTML elements")

This is a `div` element. Authors may use such elements instead of paragraph markup for various reasons. (End of `div`.)

> This is a block quotation containing a single paragraph. Well, not quite, since this is not _really_ quoted text, but I hope you understand the point. After all, this page does not use HTML markup very normally anyway.

The following contains address information about the author, in an `address` element.

{% gist 5865014 %}

[Jukka Korpela][1], [jkorpela@cs.tut.fi][2]
Pivnsteenkuja 4 A, Espoo, Finland

## Lists

This is a paragraph before an **unnumbered** list (`ul`). Note that the spacing between a paragraph and a list before or after that is hard to tune in a user style sheet. You can't guess which paragraphs are logically related to a list, e.g. as a "list header".

The following is a `menu` list:

* One.
* Two.
* Three. Well, probably this list item should be longer so that it will probably wrap to the next line in rendering.

This is a paragraph before a **numbered** list (`ol`). Note that the spacing between a paragraph and a list before or after that is hard to tune in a user style sheet. You can't guess which paragraphs are logically related to a list, e.g. as a "list header".

1. One.
2. Two.
3. Three. Well, probably this list item should be longer. Note that if items are short, lists look better if they are compactly presented, whereas for long items, it would be better to have more vertical spacing between items.
4. Four. This is the last item in this list. Let us terminate the list now without making any more fuss about it.

Some of the elements tested above are typically displayed in a monospace font, often using the _same_ presentation for all of them. This tests whether that is the case on your browser:

* * *

[Jukka Korpela][1]

[ Date][5] of creation: 2000-09-15. Last update: 2013-03-21.

   [1]: http://www.cs.tut.fi/personal.html
   [2]: mailto:jkorpela%40cs.tut.fi
   [3]: http://www.useit.com
   [4]: http://www.cs.tut.fi/links.html
   [5]: http://www.cs.tut.fi/iso8601.html (ISO 8601, the date and time representation standard)

  *[CSS]: Cascading Style Sheets
