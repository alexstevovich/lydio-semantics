declare module "index" {
    export class Site {
        static get nodeType(): string;
        constructor(domain: any, name: any);
        domain: any;
        name: any;
        append(page: any): void;
        extractMeaning(): {
            type: string;
            domain: any;
            name: any;
            content: any;
        };
    }
    export class Page {
        static get nodeType(): string;
        constructor(route: any, { lang, description }?: {
            lang?: string;
            description?: any;
        });
        route: any;
        description: any;
        docType: any;
        html: any;
        extractMeaning(): {
            type: string;
            route: any;
            description: any;
            content: any;
        };
    }
    export class Html {
        static get nodeType(): string;
        constructor(lang: any);
        head: any;
        body: any;
        complaints(): any[];
    }
    export class Head {
        static get nodeType(): string;
    }
    export class Body {
        static get nodeType(): string;
    }
    export class Address {
        static get nodeType(): string;
        extractMeaning(): {
            type: string;
            content: any;
        };
    }
    export class Aside {
        static get nodeType(): string;
        extractMeaning(): {
            type: string;
            content: any;
        };
    }
    export class A {
        static get nodeType(): string;
        href(value: any): this;
        ariaLabel(value: any): this;
        extractMeaning(): {
            type: string;
            href: any;
            aria_label: any;
            content: any;
        };
    }
    export class Button {
        static get nodeType(): string;
        ariaLabel(value: any): this;
        extractMeaning(): {
            type: string;
            aria_label: any;
            content: any;
        };
    }
    export class IMG {
        static get nodeType(): string;
        src(value: any): this;
        alt(value: any): this;
        extractMeaning(): {
            type: string;
            src: any;
            alt: any;
        };
    }
    export class HBase {
        static get nodeType(): string;
        constructor(tag: any);
        depth: number;
        visualHide(): void;
        extractMeaning(): {
            type: string;
            depth: number;
            content: any;
        };
    }
    export class H1 extends HBase {
        constructor();
    }
    export class H2 extends HBase {
        constructor();
    }
    export class H3 extends HBase {
        constructor();
    }
    export class H4 extends HBase {
        constructor();
    }
    export class H5 extends HBase {
        constructor();
    }
    export class H6 extends HBase {
        constructor();
    }
    export class P {
        static get nodeType(): string;
        extractMeaning(): {
            type: string;
            content: any;
        };
    }
    export class ListBase {
        static get nodeType(): string;
        constructor(tag: any);
        item(): any;
    }
    export class UL extends ListBase {
        constructor();
        extractMeaning(): {
            type: string;
            items: any;
        };
    }
    export class OL extends ListBase {
        constructor();
        extractMeaning(): {
            type: string;
            items: any;
        };
    }
    export class LayoutTag {
        static get nodeType(): string;
        constructor(tag: any);
        div(): any;
        section(): any;
        article(): any;
        p(text: any): any;
        img(): any;
        ul(): any;
        ol(): any;
        h1(text: any): any;
        h2(text: any): any;
        h3(text: any): any;
        h4(text: any): any;
        h5(text: any): any;
        h6(text: any): any;
    }
    export class Div extends LayoutTag {
        constructor();
    }
    export class SectionBase extends LayoutTag {
        type: any;
        extractMeaning(): {
            type: any;
            content: any;
        };
    }
    export class Main extends SectionBase {
        constructor();
    }
    export class Article extends SectionBase {
        constructor();
    }
    export class Section extends SectionBase {
        constructor();
    }
    export class Nav {
        static get nodeType(): string;
        extractMeaning(): {
            type: string;
            content: any;
        };
    }
    export class Header {
        static get nodeType(): string;
        extractMeaning(): {
            type: string;
            role: any;
            content: any;
        };
    }
    export class Footer {
        static get nodeType(): string;
        extractMeaning(): {
            type: string;
            content: any;
        };
    }
    export class SideMenu {
        static get nodeType(): string;
        extractMeaning(): {
            type: string;
            role: any;
            content: any;
        };
    }
    namespace _default {
        export { Site };
        export { Page };
        export { Header };
        export { Footer };
        export { SideMenu };
        export { Div };
        export { Main };
        export { Section };
        export { Nav };
        export { Article };
        export { Aside };
        export { Address };
        export { A };
        export { IMG };
        export { P };
        export { Button };
        export { H1 };
        export { H2 };
        export { H3 };
        export { H4 };
        export { H5 };
        export { H6 };
        export { OL };
        export { UL };
    }
    export default _default;
}
