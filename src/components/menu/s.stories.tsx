import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "50vw",
          height: "50vh",
        }}
      >
        <Story />
        <label htmlFor="menu" role="button">
          Call Menu
        </label>
      </div>
    ),
  ],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
