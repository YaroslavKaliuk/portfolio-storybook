import type { Meta, StoryObj } from "@storybook/react";

import { LoaderMaterial } from "./";

const meta = {
  title: "Components/LoaderMaterial",
  component: LoaderMaterial,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "number", min: 1, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "25vw",
          height: "25vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoaderMaterial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 5,
  },
};
