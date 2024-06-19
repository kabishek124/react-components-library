import { Meta, StoryObj } from "@storybook/react/*";
import CheckBox from "../components/CheckBox";

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    children: "",
    label: "Check the box",
    position: "before",
  },
};
