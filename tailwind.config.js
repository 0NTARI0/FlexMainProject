/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'text': '1px 1px 0 rgba(0, 0, 0, 0.3)',
      },

    },
    // backgroundSize:{
    //   'customimg': 'url("C:\Users\Dmytro\Desktop\FlexMainProject\img\icons\icon.png") 0 1px no-repeat',
    // },
  },
  plugins: [],
}
