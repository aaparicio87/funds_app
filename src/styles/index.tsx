import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors: {
      // Add new color
      primaryOne: '#770FDF',
      shadow:'#000000',
      green:'#0FDF8F',
      grey:'#A0A0A0',
    },
    config: {
      // Changing initialColorMode to 'dark'
      useSystemColorMode: false,
      initialColorMode: 'dark',
    },
  });
