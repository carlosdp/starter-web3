import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'system',
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
);
