import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";
import Icon from "@/icons";

const meta = {
  title: "Components/Forms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["Primary", "Secondary"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Button",
    disabled: false,
    isLabel: false,
    htmlFor: "id",
  },
};
