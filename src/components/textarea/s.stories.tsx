import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./";

const meta = {
  title: "Components/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title",
    placeholder: "Placeholder",
    disabled: false,
    isError: false,
    message: "Lorem ipsum dolor sit amet.",
  },
};
