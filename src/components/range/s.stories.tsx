import type { Meta, StoryObj } from "@storybook/react";

import { Range } from ".";

const meta = {
  title: "Components/Forms/Range",
  component: Range,
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
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    isVertical: false,
  },
};
