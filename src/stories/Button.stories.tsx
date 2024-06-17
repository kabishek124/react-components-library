import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";
// import { ReactComponent as ArrowRightIcon } from "../../assets/images/arrowRight.svg";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio", options: ["small", "medium", "large"] },
      description: "Determines the size of the button",
    },
    color: {
      control: {
        type: "radio",
        options: [
          "primary",
          "secondary",
          "success",
          "warning",
          "error",
          "default",
        ],
      },
      description: "Colour of the button",
    },
    variant: {
      control: {
        type: "radio",
        options: ["filled", "outline", "plain"],
      },
      description: "Variant of the button",
    },
    hideLabel: {
      control: {
        type: "boolean",
      },
      description: "Hide the Label in the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    size: "medium",
    onClick: () => {
      alert("Button clicked");
    },
    // icon: <ArrowRightIcon />,
  },
};
