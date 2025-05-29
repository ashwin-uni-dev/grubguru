/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|blue|green|yellow|purple|black)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus'],
    },
  ]
}

