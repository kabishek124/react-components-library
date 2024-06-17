import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      // Filter rules to find file-loader or url-loader handling SVG files
      const fileLoaderRule = config.module.rules.find(
        (rule) =>
          rule &&
          typeof rule !== "string" &&
          typeof rule !== "number" &&
          rule.test?.toString().includes("svg")
      );

      if (
        fileLoaderRule &&
        typeof fileLoaderRule !== "string" &&
        typeof fileLoaderRule !== "number"
      ) {
        // Exclude SVGs from file-loader or url-loader
        fileLoaderRule.exclude = /\.svg$/;
      }

      // Add rule for SVGR
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return config;
  },
};

export default config;
