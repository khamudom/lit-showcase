import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("lui-button")
export class LumenButton extends LitElement {
  @property({ type: String, reflect: true })
  href?: string;

  @property({ type: Boolean, reflect: true })
  link?: boolean;

  @property({ type: Boolean })
  outline?: boolean;

  @property({ type: String, reflect: true })
  size?: "small" | "medium" | "large";

  @property({ type: String, reflect: true })
  shape: "sharp" | "round" | "pill" | "circle" = "round";

  @property({ type: String })
  target?: string;

  @property({ type: String, reflect: true })
  variant:
    | "default"
    | "primary"
    | "success"
    | "neutral"
    | "warning"
    | "danger"
    | "text" = "default";

  private handleClick() {
    this.dispatchEvent(new CustomEvent("click"));
  }

  private contentTemplate() {
    return html`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `;
  }

  render() {
    const classes = {
      button: true,
    };

    if (this.href) {
      return html`
        <a
          class=${classMap(classes)}
          href=${ifDefined(this.href)}
          target=${ifDefined(this.target)}
          @click=${this.handleClick}
        >
          ${this.contentTemplate()}
        </a>
      `;
    }

    return html`
      <button
        type="button"
        class=${classMap(classes)}
        @click=${this.handleClick}
      >
        ${this.contentTemplate()}
      </button>
    `;
  }

  static styles = css`
    :host {
      --button-height-small: 1.875rem;
      --button-height-medium: 2.5rem;
      --button-height-large: 3.125rem;
    }

    .button {
      font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 700;
      border: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      text-decoration: none;
      transition: background 0.2s, color 0.2s;
      height: auto;
      min-height: var(--button-height-medium);
      padding: 0 1rem;
      font-size: 14px;
      color: inherit;
      background: none;
    }

    a.button {
      color: inherit;
      text-decoration: none;
      border: none;
      outline: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Shape styles */
    :host([shape="sharp"]) .button {
      border-radius: 0;
    }

    :host([shape="round"]) .button {
      border-radius: 0.25rem;
    }

    :host([shape="pill"]) .button {
      border-radius: 9999px;
    }

    :host([shape="circle"]) .button {
      border-radius: 50%;
      aspect-ratio: 1;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Size styles */
    :host([size="small"]) .button {
      font-size: 12px;
      min-height: var(--button-height-small);
    }

    :host([size="medium"]) .button {
      font-size: 14px;
      min-height: var(--button-height-medium);
    }

    :host([size="large"]) .button {
      font-size: 16px;
      min-height: var(--button-height-large);
    }

    /* Default variant */
    :host([variant="default"]) .button {
      color: #333;
      background-color: #fff;
      box-shadow: 0 0 0 1px #333 inset;
    }
    :host([variant="default"]) .button:hover {
      background-color: #f5f5f5;
    }
    :host([variant="default"][outline]) .button {
      background-color: transparent;
      box-shadow: 0 0 0 1px #333 inset;
    }
    :host([variant="default"][outline]) .button:hover {
      background-color: rgba(51, 51, 51, 0.1);
    }

    /* Primary variant */
    :host([variant="primary"]) .button {
      color: #fff;
      background-color: #1ea7fd;
      box-shadow: none;
    }
    :host([variant="primary"]) .button:hover {
      background-color: #0d8ee0;
    }
    :host([variant="primary"][outline]) .button {
      color: #1ea7fd;
      background-color: transparent;
      box-shadow: 0 0 0 1px #1ea7fd inset;
    }
    :host([variant="primary"][outline]) .button:hover {
      background-color: rgba(30, 167, 253, 0.1);
    }

    /* Success variant */
    :host([variant="success"]) .button {
      color: #fff;
      background-color: #19d86b;
      box-shadow: none;
    }
    :host([variant="success"]) .button:hover {
      background-color: #15b35a;
    }
    :host([variant="success"][outline]) .button {
      color: #19d86b;
      background-color: transparent;
      box-shadow: 0 0 0 1px #19d86b inset;
    }
    :host([variant="success"][outline]) .button:hover {
      background-color: rgba(25, 216, 107, 0.1);
    }

    /* Neutral variant */
    :host([variant="neutral"]) .button {
      color: #fff;
      background-color: #888;
      box-shadow: none;
    }
    :host([variant="neutral"]) .button:hover {
      background-color: #666;
    }
    :host([variant="neutral"][outline]) .button {
      color: #888;
      background-color: transparent;
      box-shadow: 0 0 0 1px #888 inset;
    }
    :host([variant="neutral"][outline]) .button:hover {
      background-color: rgba(136, 136, 136, 0.1);
    }

    /* Warning variant */
    :host([variant="warning"]) .button {
      color: #333;
      background-color: #ffc700;
      box-shadow: none;
    }
    :host([variant="warning"]) .button:hover {
      background-color: #e6b300;
    }
    :host([variant="warning"][outline]) .button {
      color: #ffc700;
      background-color: transparent;
      box-shadow: 0 0 0 1px #ffc700 inset;
    }
    :host([variant="warning"][outline]) .button:hover {
      background-color: rgba(255, 199, 0, 0.1);
    }

    /* Danger variant */
    :host([variant="danger"]) .button {
      color: #fff;
      background-color: #ff5b5b;
      box-shadow: none;
    }
    :host([variant="danger"]) .button:hover {
      background-color: #e64a4a;
    }
    :host([variant="danger"][outline]) .button {
      color: #ff5b5b;
      background-color: transparent;
      box-shadow: 0 0 0 1px #ff5b5b inset;
    }
    :host([variant="danger"][outline]) .button:hover {
      background-color: rgba(255, 91, 91, 0.1);
    }

    /* Text variant */
    :host([variant="text"]) .button {
      color: #333;
      background-color: transparent;
    }
    :host([variant="text"]) .button:hover {
      color: #1ea7fd;
      background-color: transparent;
    }

    /* Link style for anchor buttons */
    :host([link]) .button {
      color: #1a0dab;
      background: none;
      border: none;
      box-shadow: none;
      text-decoration: underline;
      padding: 0;
      min-height: unset;
      font-weight: 400;
      font-size: inherit;
      cursor: pointer;
    }
  `;
}
