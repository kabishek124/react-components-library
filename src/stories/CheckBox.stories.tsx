import { Meta, StoryObj } from "@storybook/react/*";
import CheckBox from "../components/CheckBox";

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    description:
      "A checkbox typically consists of a small box that users can check or uncheck, and it is used to indicate a choice or the presence or absence of a particular attribute or setting.",
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
