import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from ".";

const meta = {
  title: "Components/Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Radio",
    disabled: false,
  },
};
