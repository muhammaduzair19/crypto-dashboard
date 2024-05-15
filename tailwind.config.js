/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'darker-950': '#191C2F',
        'darker-900': '#23273F',
        'darker-800': '#34395C',
        'darker-700': '#444764',
        'darker-600': '#575979',
        'darker-500': '#707298',
        'darker-400': '#D1D3EB',
        'primary-shadow': '#341F97',
        'primary': '#5F27CD',
        'primary-light': '#6A74CC'
      },
      backgroundColor: {
        'darker-950': '#191C2F',
        'darker-900': '#23273F',
        'darker-800': '#34395C',
        'darker-700': '#444764',
        'darker-600': '#575979',
        'darker-500': '#707298',
        'darker-400': '#D1D3EB',
        'primary-shadow': '#341F97',
        'primary': '#5F27CD',
        'primary-light': '#6A74CC'
      }
    },
  },
  plugins: [],
}