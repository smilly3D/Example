import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import {theme} from '@enline-chakra-ui/react/src/theme'

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};