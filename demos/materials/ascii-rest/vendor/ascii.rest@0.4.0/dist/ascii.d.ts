declare const Base: typeof HTMLElement;
export declare class AsciiArt extends Base {
    #private;
    static observedAttributes: string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(): void;
}
/**
 * <ascii-banner>: any text as a banner (banner() in ascii.rest/banner), as one tag.
 *
 *   <ascii-banner text="hello" color="#f97316,#f778ba" shadow="rounded"></ascii-banner>
 *
 * Attributes: text; font, shadow, fill, effect and speed as banner() takes them; color, a colour or several for a
 * fade, comma separated; shadow-color; pixel and gap, numbers; options, JSON for any other option; label; mono. An
 * empty attribute is as good as none. One banner() can't take draws nothing and says why in the console.
 */
export declare class AsciiBanner extends Base {
    #private;
    static observedAttributes: string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(): void;
}
/** Defines the tags, once: <ascii-art>, or `tag`, and <ascii-banner>. Importing this module calls it. */
export declare function define(tag?: string): void;
declare global {
    interface HTMLElementTagNameMap {
        "ascii-art": AsciiArt;
        "ascii-banner": AsciiBanner;
    }
}
export {};
