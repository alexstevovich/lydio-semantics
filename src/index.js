/* *******************************************************
 * @lydio/semantics
 *
 *
 * Copyright (c) 2015-2025 Alex Stevovich. All Rights Reserved.
 *
 * No permission is granted to use, copy, modify,
 * distribute, sublicense, or create derivative works
 * of this software, in whole or in part, without explicit
 * prior written permission from the copyright holder.
 *
 *
 * @meta
 *
 * package_name: @lydio/semantics
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-11T03:29:07.677Z
 * certified_version: 1.0.0
 * file_uuid: 24dd04eb-bca6-4407-9ec4-76b3a06a4768
 * file_size: 12440 bytes
 * file_hash: 687380d94e292e6acd367e10e5b9e126c3974bf41472dfef4243de66d21858e1
 * mast_hash: 4a7662477fd9e0d4d2d55ea831c9c031f5fea61e7855df26c539c05e60a63959
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
import { Fragment, Leaf, Tag } from 'lydio';

export class Site extends Fragment {
    static get nodeType() {
        return 'site';
    }

    constructor(domain, name) {
        super();
        this.domain = domain;
        this.name = name;
    }

    append(page) {
        super.append(page);
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'site',
                  domain: this.domain,
                  name: this.name,
                  content: content,
              }
            : null;
    }
}

export class Page extends Fragment {
    static get nodeType() {
        return 'page';
    }

    constructor(route, { lang = 'en-US', description = null } = {}) {
        super('page');
        this.route = route;
        this.description = description;
        this.docType = this.doctype();
        this.html = this.append(new Html(lang));
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'page',
                  route: this.route,
                  description: this.description,
                  content: content,
              }
            : null;
    }
}

export class Html extends Tag {
    static get nodeType() {
        return 'html';
    }

    constructor(lang) {
        super('html');
        this.attr('lang', lang);
        this.head = this.append(new Head());
        this.body = this.append(new Body());
    }

    complaints() {
        let complaints = [];
        if (!this._attributes.lang) {
            complaints.push(
                this.complain('attr.lang is required (ex: en-US)', {
                    severity: 'high',
                }),
            );
        }

        return complaints;
    }
}

export class Head extends Tag {
    static get nodeType() {
        return 'head';
    }

    constructor() {
        super('head');
    }
}

export class Body extends Tag {
    static get nodeType() {
        return 'body';
    }

    constructor() {
        super('body');
    }
}

export class Address extends Tag {
    static get nodeType() {
        return 'address';
    }

    constructor() {
        super('address');
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'address',
                  content: content,
              }
            : null;
    }
}

export class Aside extends Tag {
    static get nodeType() {
        return 'aside';
    }

    constructor() {
        super('aside');
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'aside',
                  content: content,
              }
            : null;
    }
}

export class A extends Tag {
    static get nodeType() {
        return 'a';
    }

    constructor() {
        super('a');
    }

    href(value) {
        this.attr('href', value);

        return this;
    }

    ariaLabel(value) {
        this.attr('aria-label', value);

        return this;
    }

    extractMeaning() {
        return {
            type: 'a',
            href: this._attributes.href || '',
            aria_label: this._attributes['aria-label'] || '',
            content: this.getMeaningfulTextContent(),
        };
    }
}

export class Button extends Tag {
    static get nodeType() {
        return 'button';
    }

    constructor() {
        super('button');
    }

    ariaLabel(value) {
        this.attr('aria-label', value);

        return this;
    }

    extractMeaning() {
        return {
            type: 'button',
            aria_label: this._attributes['aria-label'] || '',
            content: this.getMeaningfulTextContent(),
        };
    }
}

export class IMG extends Leaf {
    static get nodeType() {
        return 'img';
    }

    constructor() {
        super('img');
    }

    src(value) {
        this.attr('src', value);

        return this;
    }

    alt(value) {
        this.attr('alt', value);

        return this;
    }

    extractMeaning() {
        return {
            type: 'img',
            src: this._attributes['src'] || null,
            alt: this._attributes['alt'] || null,
        };
    }
}

export class HBase extends Tag {
    static get nodeType() {
        return 'hbase';
    }

    constructor(tag) {
        super(tag);
        const match = tag.match(/^h([1-6])$/i);
        this.depth = match ? parseInt(match[1], 10) : null;
    }

    visualHide() {
        this.style('all', 'unset')
            .style('position', 'absolute')
            .style('width', '1px')
            .style('height', '1px')
            .style('padding', '0')
            .style('margin', '-1px')
            .style('overflow', 'hidden')
            //This one is reporting to cause accessibility to ignore.
            //.style('clip','rect(0,0,0,0)')
            .style('white-space', 'no-wrap')
            .style('border', '0');
    }

    extractMeaning() {
        return {
            type: 'h',
            depth: this.depth,
            content: this.getMeaningfulTextContent(),
        };
    }
}

export class H1 extends HBase {
    static get nodeType() {
        return 'h1';
    }

    constructor() {
        super('h1');
    }
}

export class H2 extends HBase {
    static get nodeType() {
        return 'h2';
    }

    constructor() {
        super('h2');
    }
}

export class H3 extends HBase {
    static get nodeType() {
        return 'h3';
    }

    constructor() {
        super('h3');
    }
}

export class H4 extends HBase {
    static get nodeType() {
        return 'h4';
    }

    constructor() {
        super('h4');
    }
}

export class H5 extends HBase {
    static get nodeType() {
        return 'h5';
    }

    constructor() {
        super('h5');
    }
}

export class H6 extends HBase {
    static get nodeType() {
        return 'h6';
    }

    constructor() {
        super('h6');
    }
}

export class P extends Tag {
    static get nodeType() {
        return 'p';
    }

    constructor() {
        super('p');
    }

    extractMeaning() {
        return {
            type: 'p',
            content: this.getMeaningfulTextContent(),
        };
    }
}

export class ListBase extends Tag {
    static get nodeType() {
        return 'listbase';
    }

    constructor(tag) {
        super(tag);
    }

    item() {
        const li = this.tag('li');

        return li;
    }
}

export class UL extends ListBase {
    static get nodeType() {
        return 'ul';
    }

    constructor() {
        super('ul');
    }

    extractMeaning() {
        return {
            type: 'ul',
            items: this._children
                .filter((child) => child.tagName === 'li')
                .map((li) => li.getMeaningfulTextContent()),
        };
    }
}

export class OL extends ListBase {
    static get nodeType() {
        return 'ol';
    }

    constructor() {
        super('ol');
    }

    extractMeaning() {
        return {
            type: 'ol',
            items: this._children
                .filter((child) => child.tagName === 'li')
                .map((li) => li.getMeaningfulTextContent()),
        };
    }
}

export class LayoutTag extends Tag {
    static get nodeType() {
        return 'box';
    }

    constructor(tag) {
        super(tag);
    }

    div() {
        return this.append(new Div());
    }

    section() {
        return this.append(new Section());
    }

    article() {
        return this.append(new Article());
    }

    p(text) {
        const p = this.append(new P());
        if (text) p.text(text);

        return p;
    }

    img() {
        return this.append(new IMG());
    }

    ul() {
        return this.append(new UL());
    }

    ol() {
        return this.append(new OL());
    }

    h1(text) {
        const h1 = this.append(new H1());
        if (text) h1.text(text);

        return h1;
    }

    h2(text) {
        const h2 = this.append(new H2());
        if (text) h2.text(text);

        return h2;
    }

    h3(text) {
        const h3 = this.append(new H3());
        if (text) h3.text(text);

        return h3;
    }

    h4(text) {
        const h4 = this.append(new H4());
        if (text) h4.text(text);

        return h4;
    }

    h5(text) {
        const h5 = this.append(new H5());
        if (text) h5.text(text);

        return h5;
    }

    h6(text) {
        const h6 = this.append(new H6());
        if (text) h6.text(text);

        return h6;
    }
}

export class Div extends LayoutTag {
    static get nodeType() {
        return 'div';
    }

    constructor() {
        super('div');
    }
}

export class SectionBase extends LayoutTag {
    static get nodeType() {
        return 'SEMANTIC_SECTION_BASE';
    }

    constructor(type) {
        super(type);
        this.type = type;
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content ? { type: this.type, content } : null;
    }
}

export class Main extends SectionBase {
    static get nodeType() {
        return 'SEMANTIC_MAIN';
    }

    constructor() {
        super('main');
    }
}

export class Article extends SectionBase {
    static get nodeType() {
        return 'SEMANTIC_ARTICLE';
    }

    constructor() {
        super('article');
    }
}

export class Section extends SectionBase {
    static get nodeType() {
        return 'SEMANTIC_SECTION';
    }

    constructor() {
        super('section');
    }
}

export class Nav extends Tag {
    static get nodeType() {
        return 'SEMANTIC_NAV';
    }

    constructor() {
        super('nav');
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'nav',
                  content: content,
              }
            : null;
    }
}

export class Header extends Tag {
    static get nodeType() {
        return 'SEMANTIC_HEADER';
    }

    constructor() {
        super('header');
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'header',
                  role: this._attributes.role || '',
                  content: content,
              }
            : null;
    }
}

export class Footer extends Tag {
    static get nodeType() {
        return 'SEMANTIC_FOOTER';
    }

    constructor() {
        super('footer');
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'footer',
                  content: content,
              }
            : null;
    }
}

export class SideMenu extends Tag {
    static get nodeType() {
        return 'SEMANTIC_SIDEMENU';
    }

    constructor() {
        super('div');
    }

    extractMeaning() {
        const content = super.extractMeaning();

        return content
            ? {
                  type: 'sidemenu',
                  role: this._attributes.role || '',
                  content: content,
              }
            : null;
    }
}

export default {
    Site,
    Page,
    Header,
    Footer,
    SideMenu,
    Div,
    Main,
    Section,
    Nav,
    Article,
    Aside,
    Address,
    A,
    IMG,
    P,
    Button,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    OL,
    UL,
};
