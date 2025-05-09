import type { Meta, StoryObj } from "@storybook/web-components";
import { LuiButton } from "./Button";

interface ButtonArgs {
  variant: "primary" | "secondary";
  label: string;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories/introduction
const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  render: (args: ButtonArgs) =>
    `<lui-button variant="${args.variant}">${args.label}</lui-button>`,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "The variant of the button",
    },
    label: {
      control: "text",
      description: "The text content of the button",
    },
  },
} satisfies Meta<ButtonArgs>;

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};
