import type { Meta, StoryObj } from "@storybook/react";

import { Select } from ".";

const meta = {
  title: "Components/Forms/Select",
  component: Select,
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
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title",
    disabled: false,
    isError: false,
    message: "Lorem ipsum dolor sit amet.",
  },
};
