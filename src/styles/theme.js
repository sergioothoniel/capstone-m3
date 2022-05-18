import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      0: '#3D5A80',
      100: '#98C1D9',
    },
    secondary: {
      0: '#EE6C4D',
      100: '#293241',
      200: '#BC4124',
    },
    white: {
      0: '#FFFFFF',
      100: '#FFFAFA',
      200: '#F8F8FF',
      300: '#F3F3F3',
    },
    gray: {
      0: '#C0C0C0',
      100: '#919191',
      200: '#1D1D1D',
      300: '#000000',
    },
  },
  fonts: {
    heading: 'inter',
    //body: 'inter',
  },
});
