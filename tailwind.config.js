/** @type {import('tailwindcss').Config} */
const { mauve, violet } = require( '@radix-ui/colors' );

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
      },
      spacing: {
        '120': '34rem'
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.ctfassets.net%2Fhrltx12pl8hq%2F1fR5Y7KaK9puRmCDaIof7j%2F09e2b2b9eaf42d450aba695056793607%2Fvector1.jpg&f=1&nofb=1&ipt=eabdf2acc420916c0fc91de0218dbe8bae7292c78656bf45e11ecc5b0e99acb8&ipo=images')"
      },
    },
  },
  plugins: [ require( "tailwind-gradient-mask-image" ), require( 'tailwindcss-rtl' ) ],
}
