import React from 'react';
import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import theme from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => (<ThemeProvider theme={theme()}><Story /></ThemeProvider>)],
};

export default preview;
