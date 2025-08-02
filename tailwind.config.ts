// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/app/**/*.{ts,tsx}",
//     "./src/components/**/*.{ts,tsx}",
//   ],
//   theme: { extend: {} },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './src/**/*.{js,ts,jsx,tsx}',
  // ],
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
