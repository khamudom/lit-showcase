import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  render: (args) => html`
    <lui-button
      ?primary=${args.primary}
      .backgroundColor=${args.backgroundColor}
      .size=${args.size}
      .label=${args.label}
      @click=${args.onClick}
    ></lui-button>
  `,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "onClick" },
  },
};

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
