import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./";

const meta = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <h1>h1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <hr style={{ marginBlock: "1rem" }} />
        <h2>h2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <hr style={{ marginBlock: "1rem" }} />
        <h3>
          h3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium omnis, beatae quasi.
        </h3>
        <hr style={{ marginBlock: "1rem" }} />
        <h4>
          h4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium omnis, beatae quasi.
        </h4>
        <hr style={{ marginBlock: "1rem" }} />
        <h5>
          h5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium omnis, beatae quasi nisi doloremque adipisci ea doloribus
          necessitatibus suscipit hic!
        </h5>
        <hr style={{ marginBlock: "1rem" }} />
        <h6>
          h6. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium omnis, beatae quasi nisi doloremque adipisci ea doloribus
          necessitatibus suscipit hic!
        </h6>
      </>
    ),
  },
};
