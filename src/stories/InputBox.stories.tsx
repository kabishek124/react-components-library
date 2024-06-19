import { Meta, StoryObj } from "@storybook/react/*";
import InputBox from "../components/InputBox";

const meta: Meta<typeof InputBox> = {
  component: InputBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof InputBox>;

export const Primary: Story = {
  args: {
    children: "Hi",
  },
};
