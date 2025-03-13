import type { Meta, StoryObj } from "@storybook/react";

import { _Blank } from ".";

const meta = {
  title: "Components/_Blank",
  component: _Blank,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof _Blank>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
