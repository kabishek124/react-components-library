import { Meta, StoryObj } from "@storybook/react/*";
import TextArea from "../components/TextArea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "",
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  args: {
    children: "Hi",
    label: "Line Address 1",
  },
};
