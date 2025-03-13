import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from ".";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "some_link",
    imgSrc: "https://i.pravatar.cc/300",
  },
};
