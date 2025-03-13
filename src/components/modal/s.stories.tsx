import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./";
import { Button } from "../Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
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
        <label htmlFor="modal__id" role="button">
          Call Modal
        </label>
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "modal__id",
    title: "Lorem ipsum, dolor sit amet consectetur",
    children: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
        facilis error dolore labore animi at molestias similique pariatur
        laboriosam alias totam possimus officiis vero cumque quas quis
        aspernatur nihil unde facere, rem, tempora fugiat laudantium. Voluptas
        ipsum similique dolorum pariatur ea minima id, quo aliquid explicabo
        incidunt vel corporis quas aut totam vitae et alias perspiciatis non
        quos deleniti quisquam sunt officiis saepe. At sint enim perferendis.
        Consequuntur saepe nemo dolorem sint! Veniam illo sed iste eius ducimus
        fugiat natus nisi. Sed temporibus architecto repellat dignissimos
        facilis aspernatur asperiores reiciendis beatae tempora, nam, maiores
        quod quo, earum repellendus voluptate consectetur.
      </>
    ),

    footer: (
      <>
        <Button title="Close" isLabel htmlFor="modal__id" />
      </>
    ),
  },
};
