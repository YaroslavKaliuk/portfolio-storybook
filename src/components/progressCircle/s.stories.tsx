// import { ComponentStory } from '@storybook/react';
// import { ProgressCircle as ProgressCircleComponent } from '..';

// export default {
//   title: 'Bits',
//   component: ProgressCircleComponent,
// };

// const Template: ComponentStory<typeof ProgressCircleComponent> = (args) => (
//   <ProgressCircleComponent {...args} />
// );

// export const ProgressCircle = Template.bind({});
// ProgressCircle.args = {
// percent: 14,
// colorLine: '#e3e3e3',
// colorProgress: '#389718',
// };

// ProgressCircle.argTypes = {
// percent: {
//   control: { type: 'number', min: 0, max: 100, step: 1 },
// },
// colorLine: {
//   control: { type: 'color' },
// },
// colorProgress: {
//   control: { type: 'color' },
// },
// };

import type { Meta, StoryObj } from "@storybook/react";

import { ProgressCircle } from "./";

const meta = {
  title: "Components/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    percent: {
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    colorLine: {
      control: { type: "color" },
    },
    colorProgress: {
      control: { type: "color" },
    },
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
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    percent: 14,
    colorLine: "#e3e3e3",
    colorProgress: "#389718",
  },
};
