import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '360px', // Small phones (iPhone SE, Galaxy A series)
      sm: '640px', // Standard phones
      md: '768px', // Tablets
      lg: '1024px', // Laptops
      xl: '1440px', // Larger desktops
      '2xl': '2560px', // Very large desktops
      '4xl': '3840px', // 4K monitors (optional, future-proof)
    },
    extend: {
      fontFamily: {
        main: ['Copper', 'ui-sans-serif', 'system-ui'],
        sub: ['Futura', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config
