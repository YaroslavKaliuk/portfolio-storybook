import type { Meta, StoryObj } from "@storybook/react";

import { Shape } from ".";

const meta = {
  title: "Components/Shape",
  component: Shape,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Shape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
