/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'wedding-green': '#005421'
      },
      backgroundImage: {
        splash: "url('./assets/splash.png')"
      }
    }
  }
}
