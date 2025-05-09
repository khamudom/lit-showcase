import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Header";

const meta: Meta = {
  title: "Components/Header",
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  render: (args) => html`
    <lui-header
      .user=${args.user}
      @login=${args.onLogin}
      @logout=${args.onLogout}
      @createAccount=${args.onCreateAccount}
    ></lui-header>
  `,
  argTypes: {
    onLogin: { action: "onLogin" },
    onLogout: { action: "onLogout" },
    onCreateAccount: { action: "onCreateAccount" },
  },
};

export default meta;
type Story = StoryObj;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {
  args: {},
};
