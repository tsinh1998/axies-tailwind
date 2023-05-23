/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
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
        rainbow: {
          '0%': { background_position: 'left' },
          '50%': { background_position: 'right' },
          '100%': { background_position: 'left' },
        },
        watermarkanimate: {
          '0%': { left: '0' },
          '100%': { left: '90%' },
        },
      }
    },
  },
  plugins: [],
}

