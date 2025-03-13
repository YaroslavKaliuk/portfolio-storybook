import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from ".";
import { Button } from "../Button";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
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
          overflow: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <Story />
        <label htmlFor="drawer__id" role="button">
          Call Drawer
        </label>
      </div>
    ),
  ],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "drawer__id",
    title: "Lorem ipsum, dolor sit amet consectetur",
    isLeftSide: false,
    isLeftButton: true,
    isRightButton: true,
    footer: <>{<Button title="Close" isLabel htmlFor="drawer__id" />}</>,
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore velit
        deleniti reprehenderit ad sint nesciunt unde quaerat dicta laboriosam.
        Suscipit at eos et repellendus quam dolorum laboriosam commodi! Fugiat
        necessitatibus enim quae quaerat, dolorem, sunt culpa molestias aut,
        autem expedita officiis? Porro quaerat alias odit repellendus? Aut eum
        amet dignissimos magni voluptas dolorum, sunt iusto architecto accusamus
        enim eaque, ad totam minus molestiae minima accusantium tempora, est
        aliquam. Pariatur minima quidem magni veniam consequuntur, quo magnam!
        Est culpa numquam, non mollitia eos sed tempore expedita dolor minus
        nobis praesentium laboriosam quibusdam officia, sint ullam rem sit ad
        laudantium id quos. Quam ipsum explicabo iste modi voluptatibus nam
        dicta ducimus sit, tempore repudiandae hic obcaecati similique impedit
        totam nemo perferendis porro rerum tenetur praesentium eaque numquam.
        Voluptatum ea blanditiis quos ullam id adipisci quasi earum dicta
        facilis animi, est quas beatae, quibusdam qui voluptate eum illum?
        Placeat, quaerat? Corrupti atque hic mollitia totam consequuntur ipsa
        quas eum, impedit deleniti voluptatum! Sunt nostrum a voluptates minus
        sed excepturi repellendus sit tempore nobis dolorem quos, at minima eos
        optio voluptatibus unde quidem quo ad delectus porro autem architecto
        officia earum impedit.
      </>
    ),
  },
};
