/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: ['class', '[data-mode="dark"]'],
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
        watermarkanimate: {
          '0%': { left: '0' },
          '100%': { left: '90%' },
        },
        slidein: {
          '0%': { opacity:'0' ,transform: 'translateY(-100%)' },
          '60%': { opacity:'1' ,transform: 'translateY(20%)' },
          '100%': { opacity:'1' ,transform: 'translateY(0%)' },
        },
        slideout: {
          '0%': { opacity:'1' ,transform: 'translateY(0%)' },
          '60%': { opacity:'0' ,transform: 'translateY(120%)' },
          '100%': { opacity:'0' ,transform: 'translateY(100%)' },
        },
        cdrotate3in: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        cdrotate3out: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-180deg)' },
        }
      }
    },
  },
  plugins: [],
}