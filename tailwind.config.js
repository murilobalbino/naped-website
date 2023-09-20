export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'yellow2': '#F5970A',
            'yellow': '#FFCD1E',
            'blue': '#027FE9',
            'light-blue': '#027FE9',
            'dark-purple': '#302A52',
        },
        keyframes: {
            'show-animation': {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 },
            }
        },
        animation: {
            'show-animation': 'show-animation 0.5s ease-in-out',
        }
    },
  },
  plugins: [],
}