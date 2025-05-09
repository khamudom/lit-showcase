import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./Button.styles.ts";

@customElement("lui-button")
export class LuiButton extends LitElement {
  static styles = [styles];

  @property({ type: String }) variant = "primary";

  render() {
    return html`
      <button class=${this.variant}>
        <slot></slot>
      </button>
    `;
  }
}
