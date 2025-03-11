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
 * file_name: gen/index.cjs
 * purpose: {{PURPOSE}}
 *  
 * @system
 *
 * generated_on: 2025-03-11T03:32:04.921Z
 * certified_version: 1.0.0
 * file_uuid: 2b664876-05d7-466c-a524-fba801804dad
 * file_size: 11161 bytes
 * file_hash: 055b83cd8dc044cfa4a45bd529edf9a0b53ca2858bceea00cb336ce813451385
 * mast_hash: 91d593f9095784adc5e79939aff2cb2f27f6b2103036b2b4276a10392660f289
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
********************************************************/ 
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
var index_exports = {};
__export(index_exports, {
  A: () => A,
  Address: () => Address,
  Article: () => Article,
  Aside: () => Aside,
  Body: () => Body,
  Button: () => Button,
  Div: () => Div,
  Footer: () => Footer,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  HBase: () => HBase,
  Head: () => Head,
  Header: () => Header,
  Html: () => Html,
  IMG: () => IMG,
  LayoutTag: () => LayoutTag,
  ListBase: () => ListBase,
  Main: () => Main,
  Nav: () => Nav,
  OL: () => OL,
  P: () => P,
  Page: () => Page,
  Section: () => Section,
  SectionBase: () => SectionBase,
  SideMenu: () => SideMenu,
  Site: () => Site,
  UL: () => UL,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_html = require("@lydio/html");
class Site extends import_html.Fragment {
  static get nodeType() {
    return "site";
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
    return content ? {
      type: "site",
      domain: this.domain,
      name: this.name,
      content
    } : null;
  }
}
class Page extends import_html.Fragment {
  static get nodeType() {
    return "page";
  }
  constructor(route, { lang = "en-US", description = null } = {}) {
    super("page");
    this.route = route;
    this.description = description;
    this.docType = this.doctype();
    this.html = this.append(new Html(lang));
  }
  extractMeaning() {
    const content = super.extractMeaning();
    return content ? {
      type: "page",
      route: this.route,
      description: this.description,
      content
    } : null;
  }
}
class Html extends import_html.Tag {
  static get nodeType() {
    return "html";
  }
  constructor(lang) {
    super("html");
    this.attr("lang", lang);
    this.head = this.append(new Head());
    this.body = this.append(new Body());
  }
  complaints() {
    let complaints = [];
    if (!this._attributes.lang) {
      complaints.push(
        this.complain("attr.lang is required (ex: en-US)", {
          severity: "high"
        })
      );
    }
    return complaints;
  }
}
class Head extends import_html.Tag {
  static get nodeType() {
    return "head";
  }
  constructor() {
    super("head");
  }
}
class Body extends import_html.Tag {
  static get nodeType() {
    return "body";
  }
  constructor() {
    super("body");
  }
}
class Address extends import_html.Tag {
  static get nodeType() {
    return "address";
  }
  constructor() {
    super("address");
  }
  extractMeaning() {
    const content = super.extractMeaning();
    return content ? {
      type: "address",
      content
    } : null;
  }
}
class Aside extends import_html.Tag {
  static get nodeType() {
    return "aside";
  }
  constructor() {
    super("aside");
  }
  extractMeaning() {
    const content = super.extractMeaning();
    return content ? {
      type: "aside",
      content
    } : null;
  }
}
class A extends import_html.Tag {
  static get nodeType() {
    return "a";
  }
  constructor() {
    super("a");
  }
  href(value) {
    this.attr("href", value);
    return this;
  }
  ariaLabel(value) {
    this.attr("aria-label", value);
    return this;
  }
  extractMeaning() {
    return {
      type: "a",
      href: this._attributes.href || "",
      aria_label: this._attributes["aria-label"] || "",
      content: this.getMeaningfulTextContent()
    };
  }
}
class Button extends import_html.Tag {
  static get nodeType() {
    return "button";
  }
  constructor() {
    super("button");
  }
  ariaLabel(value) {
    this.attr("aria-label", value);
    return this;
  }
  extractMeaning() {
    return {
      type: "button",
      aria_label: this._attributes["aria-label"] || "",
      content: this.getMeaningfulTextContent()
    };
  }
}
class IMG extends import_html.Leaf {
  static get nodeType() {
    return "img";
  }
  constructor() {
    super("img");
  }
  src(value) {
    this.attr("src", value);
    return this;
  }
  alt(value) {
    this.attr("alt", value);
    return this;
  }
  extractMeaning() {
    return {
      type: "img",
      src: this._attributes["src"] || null,
      alt: this._attributes["alt"] || null
    };
  }
}
class HBase extends import_html.Tag {
  static get nodeType() {
    return "hbase";
  }
  constructor(tag) {
    super(tag);
    const match = tag.match(/^h([1-6])$/i);
    this.depth = match ? parseInt(match[1], 10) : null;
  }
  visualHide() {
    this.style("all", "unset").style("position", "absolute").style("width", "1px").style("height", "1px").style("padding", "0").style("margin", "-1px").style("overflow", "hidden").style("white-space", "no-wrap").style("border", "0");
  }
  extractMeaning() {
    return {
      type: "h",
      depth: this.depth,
      content: this.getMeaningfulTextContent()
    };
  }
}
class H1 extends HBase {
  static get nodeType() {
    return "h1";
  }
  constructor() {
    super("h1");
  }
}
class H2 extends HBase {
  static get nodeType() {
    return "h2";
  }
  constructor() {
    super("h2");
  }
}
class H3 extends HBase {
  static get nodeType() {
    return "h3";
  }
  constructor() {
    super("h3");
  }
}
class H4 extends HBase {
  static get nodeType() {
    return "h4";
  }
  constructor() {
    super("h4");
  }
}
class H5 extends HBase {
  static get nodeType() {
    return "h5";
  }
  constructor() {
    super("h5");
  }
}
class H6 extends HBase {
  static get nodeType() {
    return "h6";
  }
  constructor() {
    super("h6");
  }
}
class P extends import_html.Tag {
  static get nodeType() {
    return "p";
  }
  constructor() {
    super("p");
  }
  extractMeaning() {
    return {
      type: "p",
      content: this.getMeaningfulTextContent()
    };
  }
}
class ListBase extends import_html.Tag {
  static get nodeType() {
    return "listbase";
  }
  constructor(tag) {
    super(tag);
  }
  item() {
    const li = this.tag("li");
    return li;
  }
}
class UL extends ListBase {
  static get nodeType() {
    return "ul";
  }
  constructor() {
    super("ul");
  }
  extractMeaning() {
    return {
      type: "ul",
      items: this._children.filter((child) => child.tagName === "li").map((li) => li.getMeaningfulTextContent())
    };
  }
}
class OL extends ListBase {
  static get nodeType() {
    return "ol";
  }
  constructor() {
    super("ol");
  }
  extractMeaning() {
    return {
      type: "ol",
      items: this._children.filter((child) => child.tagName === "li").map((li) => li.getMeaningfulTextContent())
    };
  }
}
class LayoutTag extends import_html.Tag {
  static get nodeType() {
    return "box";
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
class Div extends LayoutTag {
  static get nodeType() {
    return "div";
  }
  constructor() {
    super("div");
  }
}
class SectionBase extends LayoutTag {
  static get nodeType() {
    return "SEMANTIC_SECTION_BASE";
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
class Main extends SectionBase {
  static get nodeType() {
    return "SEMANTIC_MAIN";
  }
  constructor() {
    super("main");
  }
}
class Article extends SectionBase {
  static get nodeType() {
    return "SEMANTIC_ARTICLE";
  }
  constructor() {
    super("article");
  }
}
class Section extends SectionBase {
  static get nodeType() {
    return "SEMANTIC_SECTION";
  }
  constructor() {
    super("section");
  }
}
class Nav extends import_html.Tag {
  static get nodeType() {
    return "SEMANTIC_NAV";
  }
  constructor() {
    super("nav");
  }
  extractMeaning() {
    const content = super.extractMeaning();
    return content ? {
      type: "nav",
      content
    } : null;
  }
}
class Header extends import_html.Tag {
  static get nodeType() {
    return "SEMANTIC_HEADER";
  }
  constructor() {
    super("header");
  }
  extractMeaning() {
    const content = super.extractMeaning();
    return content ? {
      type: "header",
      role: this._attributes.role || "",
      content
    } : null;
  }
}
class Footer extends import_html.Tag {
  static get nodeType() {
    return "SEMANTIC_FOOTER";
  }
  constructor() {
    super("footer");
  }
  extractMeaning() {
    const content = super.extractMeaning();
    return content ? {
      type: "footer",
      content
    } : null;
  }
}
class SideMenu extends import_html.Tag {
  static get nodeType() {
    return "SEMANTIC_SIDEMENU";
  }
  constructor() {
    super("div");
  }
  extractMeaning() {
    const content = super.extractMeaning();
    return content ? {
      type: "sidemenu",
      role: this._attributes.role || "",
      content
    } : null;
  }
}
var index_default = {
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
  UL
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  A,
  Address,
  Article,
  Aside,
  Body,
  Button,
  Div,
  Footer,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HBase,
  Head,
  Header,
  Html,
  IMG,
  LayoutTag,
  ListBase,
  Main,
  Nav,
  OL,
  P,
  Page,
  Section,
  SectionBase,
  SideMenu,
  Site,
  UL
});
