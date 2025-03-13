import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        id: "item1",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ducimus quod consequuntur illo nostrum veniam?",
        isDisabled: true,
      },
      {
        id: "item2",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ducimus quod consequuntur illo nostrum veniam?",
      },
      {
        id: "item3",
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ducimus quod consequuntur illo nostrum veniam?",
      },
    ],
  },
};
