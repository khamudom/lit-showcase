import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  render: (args) => html`
    <lui-button
      size=${ifDefined(args.size)}
      shape=${ifDefined(args.shape)}
      variant=${ifDefined(args.variant)}
      .href=${args.href}
      .target=${args.target}
      ?link=${args.link}
      @click=${args.onClick}
    >
      ${args.prefix ? html`<span slot="prefix">${args.prefix}</span>` : nothing}
      ${args.content}
      ${args.suffix ? html`<span slot="suffix">${args.suffix}</span>` : nothing}
    </lui-button>
  `,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["sharp", "round", "pill", "circle"],
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "success",
        "neutral",
        "warning",
        "danger",
      ],
    },
    onClick: { action: "onClick" },
    prefix: { control: "text" },
    suffix: { control: "text" },
    content: { control: "text" },
    target: {
      control: { type: "select" },
      options: [undefined, "_blank", "_self", "_parent", "_top"],
    },
  },
};

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    content: "Button",
  },
  parameters: {
    docs: {
      source: {
        code: `<lui-button>Button</lui-button>`,
      },
    },
  },
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <lui-button variant="default">Default</lui-button>
      <lui-button variant="primary">Primary</lui-button>
      <lui-button variant="success">Success</lui-button>
      <lui-button variant="neutral">Neutral</lui-button>
      <lui-button variant="warning">Warning</lui-button>
      <lui-button variant="danger">Danger</lui-button>
      <lui-button variant="text">Text</lui-button>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `
          <lui-button variant="default">Default</lui-button>
          <lui-button variant="primary">Primary</lui-button>
          <lui-button variant="success">Success</lui-button>
          <lui-button variant="neutral">Neutral</lui-button>
          <lui-button variant="warning">Warning</lui-button>
          <lui-button variant="danger">Danger</lui-button>
        `,
      },
    },
  },
};

export const Outline: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <lui-button variant="default" outline>Default</lui-button>
      <lui-button variant="primary" outline>Primary</lui-button>
      <lui-button variant="success" outline>Success</lui-button>
      <lui-button variant="neutral" outline>Neutral</lui-button>
      <lui-button variant="warning" outline>Warning</lui-button>
      <lui-button variant="danger" outline>Danger</lui-button>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `
          <lui-button variant="default" outline>Default</lui-button>
          <lui-button variant="primary" outline>Primary</lui-button>
          <lui-button variant="success" outline>Success</lui-button>
          <lui-button variant="neutral" outline>Neutral</lui-button>
          <lui-button variant="warning" outline>Warning</lui-button>
          <lui-button variant="danger" outline>Danger</lui-button>
        `,
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div
      style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;"
    >
      <lui-button size="small">Small</lui-button>
      <lui-button size="medium">Medium</lui-button>
      <lui-button size="large">Large</lui-button>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `
          <lui-button size="small">Small</lui-button>
          <lui-button size="medium">Medium</lui-button>
          <lui-button size="large">Large</lui-button>
        `,
      },
    },
  },
};

export const Shapes: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <lui-button shape="sharp">Sharp</lui-button>
      <lui-button shape="round">Round</lui-button>
      <lui-button shape="pill">Pill</lui-button>
      <lui-button shape="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </lui-button>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `
          <lui-button shape="sharp">Sharp</lui-button>
          <lui-button shape="round">Round</lui-button>
          <lui-button shape="pill">Pill</lui-button>
          <lui-button shape="circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </lui-button>
        `,
      },
    },
  },
};

export const Link: Story = {
  args: {
    content: "Anchor Button",
    href: "https://example.com",
    target: "_blank",
    link: true,
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    prefix: "👋",
    content: "Hello World",
    suffix: "→",
  },
};
