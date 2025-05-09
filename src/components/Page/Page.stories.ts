import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Page";

const meta: Meta = {
  title: "Components/Page",
  tags: ["autodocs"],
  render: (args) => html`
    <lui-page
      .user=${args.user}
      @login=${args.onLogin}
      @logout=${args.onLogout}
      @createAccount=${args.onCreateAccount}
    ></lui-page>
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
