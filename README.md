# @lydio/semantics

**DISCLAIMER:**

#### 🚨This project is **NOT** open source. It is exposed to satisfy requirements related to my business.

_Thank you for your understanding._

Copyright © 2015-2025 Alex Stevovich. All Rights Reserved.
No permission is granted to use, copy, modify, distribute, sublicense, or create derivative works of this software, in whole or in part, without explicit prior written permission from the copyright holder.

See `LICENSE` and `TRADEMARK.md` for more.

---

**Structured, Meaningful HTML Composition**

**`@lydio/semantics`** provides a structured approach to HTML generation, emphasizing **semantic correctness** and **hierarchical meaning extraction**. It extends Lydio’s core capabilities by introducing specialized **semantic node classes** that mirror real-world document structure.

**Github:**
[https://github.com/alexstevovich/lydio-semantics](https://github.com/alexstevovich/lydio-semantics)

**Lydio (Core):**
[https://github.com/alexstevovich/lydio](https://github.com/alexstevovich/lydio)

## **Features:**

- **Semantic Elements** – Direct representations of `<article>`, `<section>`, `<nav>`, and more.
- **Extract Meaning** – Convert Lydio structures into meaningful JSON representations.
- **Accessible Defaults** – Encourages `aria-label` and `alt` attributes where relevant.
- **Audit** - Automatically audits semantic components for correctness.

## Installation

```bash
npm install lydio
npm install @lydio/semantics
```

**Note** lydio is required but not listed as a dependency to simplify installation on private package managers. Please ensure both are installed!

## Usage

```js
import semantics from '@lydio/semantics';

const mySite = new Site('example.com', 'Example Site');
const homepage = new Page('/', { lang: 'en-US', description: 'A demo page' });
homepage.html.head.append(new Nav());
homepage.html.body
    .append(new Main())
    .append(new Article())
    .p('Welcome to our site!');
mySite.append(homepage);

mySite.audit();
console.log(mySite.toHtml());
console.log(mySite.toMeaning());
```

## **Semantic Elements Overview**

### **Page Composition**

- **`Site(domain, name)`** → Represents a website structure.
- **`Page(route, options)`** → A structured page with metadata.
- **`Html(lang)`** → The root `<html>` element with language attributes.
- **`Head()`** → The `<head>` section.
- **`Body()`** → The `<body>` section.

### **Document Structure Elements**

- **`Main()`** → `<main>` wrapper.
- **`Article()`** → `<article>` content block.
- **`Section()`** → `<section>` element.
- **`Nav()`** → `<nav>` for navigation menus.
- **`Header()` / `Footer()`** → `<header>` and `<footer>`.

### **Content Elements**

- **`H1` - `H6`** → Headings (`<h1>` to `<h6>`).
- **`P()`** → Paragraph (`<p>`).
- **`UL()` / `OL()`** → Unordered and ordered lists.
- **`A().href(value)`** → `<a>` link with an optional `aria-label`.
- **`IMG().src(value).alt(value)`** → `<img>` with required `alt`.
- **`Button().ariaLabel(value)`** → `<button>` element with `aria-label`.

## Auditing and Meaning Extraction

Lydio Semantics extends Lydio’s core auditing and meaning extraction capabilities, providing **richer analysis** and **more structured insights** into semantic correctness.

### Audit

Every semantic node can be audited to provide feedback on **best practices**, **accessibility compliance**, and **SEO optimizations**.

### Semantic Meaning

Every semantic node can be converted into **a structured JSON representation** using `toMeaning()`. This ensures that content retains its logical intent when processed, analyzed, or repurposed.

```js
const section = new Section();
section.append(new H1().text('Our Services'));
section.append(new P().text('We offer high-quality software solutions.'));
console.log(section.toMeaning());
```

**Output**

```json
{
    "type": "section",
    "content": [
        { "type": "h", "depth": 1, "content": "Our Services" },
        { "type": "p", "content": "We offer high-quality software solutions." }
    ]
}
```

### See Everything At Once

Unlike raw HTML, which can obscure important attributes or dynamically hidden text, **structured meaning extraction** allows you to **see all relevant content at once**. This includes:

- **ARIA labels, alt text, and metadata** that might not be visible in a normal rendered page.
- **Nested content relationships**, showing how different elements fit together.
- **Full textual content**, making proofreading and editing easier.

This is particularly useful for:

- **SEO analysis**
- **Accessibility verification**
- **Large-scale content audits**
- **Machine-readable site overviews**

### Futurism

By pairing layout and meaning as structured data, `@lydio/semantics` enables **new possibilities** for web rendering and accessibility:

- **Adaptive Browsing** – Users could define how they want content presented, separating structure from display.
- **Intelligent Content Processing** – Meaningful data extraction makes websites more interpretable by AI and assistive technologies.
- **Editable JSON-Based Site Representation** – Websites could be edited as structured meaning rather than raw HTML.

## License

Copyright © 2015-2025 Alex Stevovich. All Rights Reserved.
No permission is granted to use, copy, modify, distribute, sublicense, or create derivative works of this software, in whole or in part, without explicit prior written permission from the copyright holder.

This project is **NOT** open source. It is exposed to satisfy requirements related to my business.
_Thank you for your understanding._

See `LICENSE` and `TRADEMARK.md` for more.
