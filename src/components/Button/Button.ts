import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lui-button")
export class LumenButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .button {
      font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 700;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
    }

    .button--primary {
      color: white;
      background-color: #1ea7fd;
    }

    .button--secondary {
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }

    .button--small {
      font-size: 12px;
      padding: 10px 16px;
    }

    .button--medium {
      font-size: 14px;
      padding: 11px 20px;
    }

    .button--large {
      font-size: 16px;
      padding: 12px 24px;
    }
  `;

  @property({ type: Boolean })
  primary = false;

  @property({ type: String })
  backgroundColor?: string;

  @property({ type: String })
  size: "small" | "medium" | "large" = "medium";

  @property({ type: String })
  label = "Button";

  private handleClick() {
    this.dispatchEvent(new CustomEvent("click"));
  }

  render() {
    const mode = this.primary ? "button--primary" : "button--secondary";

    return html`
      <button
        type="button"
        class=${["button", `button--${this.size}`, mode].join(" ")}
        style=${this.backgroundColor
          ? `background-color: ${this.backgroundColor}`
          : ""}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }
}
