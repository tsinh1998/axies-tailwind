/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        move3: {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(30px)' },
          '100%': { transform: 'translate(0px)' },
        },
        move4: {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(-30px)' },
          '100%': { transform: 'translate(0px)' },
        },
        move5: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      }
    },
  },
  plugins: [],
}

