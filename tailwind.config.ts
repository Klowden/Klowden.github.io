import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // Define custom breakpoints.
        xxs: '400px',
        xs: '460px',
        mxs: '560px',
        msm: '670px',
        mmd: '832px',
        mlg: '1100px',
        mxl: '1400px',
      },
      fontFamily: {
        // custom fonts.
        Montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'portfolio': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config