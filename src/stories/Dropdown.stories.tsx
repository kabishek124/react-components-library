import { Meta, StoryObj } from "@storybook/react/*";
import Dropdown from "../components/Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    description: "Please select the country",
    label: "Origin of Country",
    placeholder: "Country Name",
  },
};
