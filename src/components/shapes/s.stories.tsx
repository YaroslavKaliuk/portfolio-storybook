import type { Meta, StoryObj } from "@storybook/react";

import { Shapes } from ".";

const meta = {
  title: "Components/Shapes",
  component: Shapes,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Shapes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
