---
layout: blog_entry
image: http://placekitten.com/600/260
title: Here Is A Test Of Markdown Styling
category: blog
---
Markdown: Syntax
================

[Permalink](http://www.cs.tut.fi/~jkorpela/www/testel.html "Permalink to Test display of HTML elements")

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

This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

This is a `div` element. Authors may use such elements instead of paragraph markup for various reasons. (End of `div`.)

&gt; This is a block quotation containing a single paragraph. Well, not quite, since this is not _really_ quoted text, but I hope you understand the point. After all, this page does not use HTML markup very normally anyway.

The following contains address information about the author, in an `address` element.

[Jukka Korpela][1], [jkorpela@cs.tut.fi][2]
Pivnsteenkuja 4 A, Espoo, Finland

## Lists

This is a paragraph before an **unnumbered** list (`ul`). Note that the spacing between a paragraph and a list before or after that is hard to tune in a user style sheet. You can't guess which paragraphs are logically related to a list, e.g. as a "list header".

  * One.
  * Two.
  * Three. Well, probably this list item should be longer. Note that for short items lists look better if they are compactly presented, whereas for long items, it would be better to have more vertical spacing between items.
  * Four. This is the last item in this list. Let us terminate the list now without making any more fuss about it.

The following is a `menu` list:

* One.
* Two.
* Three. Well, probably this list item should be longer so that it will probably wrap to the next line in rendering.

The following is a `dir` list:

* One.
* Two.
* Three. Well, probably this list item should be longer so that it will probably wrap to the next line in rendering.

This is a paragraph before a **numbered** list (`ol`). Note that the spacing between a paragraph and a list before or after that is hard to tune in a user style sheet. You can't guess which paragraphs are logically related to a list, e.g. as a "list header".

  1. One.
  2. Two.
  3. Three. Well, probably this list item should be longer. Note that if items are short, lists look better if they are compactly presented, whereas for long items, it would be better to have more vertical spacing between items.
  4. Four. This is the last item in this list. Let us terminate the list now without making any more fuss about it.

This is a paragraph before a **definition** list (`dl`). In principle, such a list should consist of _terms_ and associated  definitions. But many authors use `dl` elements for fancy "layout" things. Usually the effect is not _too_ bad, if you design user style sheet rules for `dl` which are suitable for real definition lists.

recursion
     see recursion
recursion, indirect
     see indirect recursion
indirect recursion
     see recursion, indirect
term
     a word or other expression taken into specific use in a well-defined meaning, which is often defined rather rigorously, even formally, and may differ quite a lot from an everyday meaning

## Text-level markup

  * CSS (an abbreviation; `abbr` markup used)
  * radar (an acronym; `acronym` markup used)
  * **bolded** (`b` markup used - just bolding with unspecified semantics)
  * big thing (`big` markup used)
  * large size (`font size=6` markup used)
  * Courier font (`font face=Courier` markup used)
  * red text (`font color=red` markup used)
  * Origin of Species (a book title; `cite` markup used)
  * `a[i] = b[i] %2B c[i);` (computer code; `code` markup used)
  * here we have some deleted text (`del` markup used)
  * an octet is an entity consisting of eight bits (`dfn` markup used for the term being defined)
  * this is _very_ simple (`em` markup used for emphasizing a word)
  * _Homo sapiens_ (should appear in italics; `i` markup used)
  * here we have some inserted text (`ins` markup used)
  * type yes when prompted for an answer (`kbd` markup used for text indicating keyboard input)
  * Hello! (`q` markup used for quotation)
  * He said: She said Hello! (a quotation inside a quotation)
  * you may get the message Core dumped at times (`samp` markup used for sample output)
  * this is not that important (`small` markup used)
  * overstruck (`strike` markup used; note: `s` is a nonstandard synonym for `strike`)
  * **this is highlighted text** (`strong` markup used)
  * In order to test how subscripts and superscripts (`sub` and `sup` markup) work inside running text, we need some dummy text around constructs like x1 and H2O (where subscripts occur). So here is some fill so that you will (hopefully) see whether and how badly the subscripts and superscripts mess up vertical spacing between lines. Now superscripts: Mlle, 1st, and then some mathematical notations: ex, sin2_x_, and some nested superscripts (exponents) too: ex2 and f(x)g(x)a%2Bb%2Bc (where 2 and a%2Bb%2Bc should appear as exponents of exponents).
  * `text in monospace font` (`tt` markup used)
  * _underlined_ text (`u` markup used)
  * the command `cat` filename displays the file specified by the filename (`var` markup used to indicate a word as a variable).

Some of the elements tested above are typically displayed in a monospace font, often using the _same_ presentation for all of them. This tests whether that is the case on your browser:

  * `This is sample text inside code markup`
  * This is sample text inside kbd markup
  * This is sample text inside samp markup
  * `This is sample text inside tt markup`

## Links

This is a text paragraph that contains some inline links. Generally, inline links (as opposite to e.g. links lists) are problematic from the [usability][3] perspective, but they may have use as “incidental”, less relevant links. See the document [Links Want To Be Links][4].

## Forms

## Tables

The following table has a caption. The first row and the first column contain table header cells (`th` elements) only; other cells are data cells (`td` elements), with `align="right"` attributes:

Sample table: Areas of the Nordic countries, in sq km

Country Total area Land area

Denmark
43,070
42,370

Finland
337,030
305,470

Iceland
103,000
100,250

Norway
324,220
307,860

Sweden
449,964
410,928

## Character test

The following table has some sample characters with annotations. If the browser’s default font does not contain all of them, they may get displayed using backup fonts. This may cause stylistic differences, but it should not prevent the characters from being displayed at all.

Char. Explanation Notes

e with circumflex
Latin 1 character, should be ok

—
em dash
Windows Latin 1 character, should be ok, too

Ā
A with macron (line above)
Latin Extended-A character, not present in all fonts

Ω
capital omega
A Greek letter

−
minus sign
Unicode minus

⌀
diameter sign
relatively rare in fonts

## Hyphenation

In the following, a width setting should cause some hyphenation, depending on support to various methods of hyphenation.

### CSS-based hyphenation

Until recently the great majority of naturalists believed that species were immutable productions, and had been separately created. This view has been ably maintained by many authors.

### JavaScript-driven hyphenation

Until recently the great majority of naturalists believed that species were immutable productions, and had been separately created. This view has been ably maintained by many authors.

### Explicit hyphenation hints (soft hyphens)

Until recently the great majority of naturalists believed that species were immutable productions, and had been separately created. This view has been ably maintained by many authors.

* * *

[Jukka Korpela][1]

[ Date][5] of creation: 2000-09-15. Last update: 2013-03-21.

   [1]: http://www.cs.tut.fi/personal.html
   [2]: mailto:jkorpela%40cs.tut.fi
   [3]: http://www.useit.com
   [4]: http://www.cs.tut.fi/links.html
   [5]: http://www.cs.tut.fi/iso8601.html (ISO 8601, the date and time representation standard)

  *[CSS]: Cascading Style Sheets
