module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary':'#1E1E1E', /* 60%*/
      'primary-dark':'#161616', /* 60%*/
      'primary-light':'#292C39', /* 60%*/
      'secondary':'#252526', /* 30%*/
      'secondary-light':'#A8A8A8', /* 30%*/
      'secondary-dark':'#282828', /* 30%*/
      'accent':'#5686E1', /* 10%*/
      'grey-light-1':'#F2F3FC',
      'grey-light-2':'#CACBD3',
      'grey-light-3':'#8B8C95',
      'grey-light-4':'#E6E7F0',
      'grey-light-5':'#C4C6CF',
      'grey-light-6':'#E2E2E2',
      'grey-light-7':'#D4D4D4',
      'grey-light-8':'#757575',
      'grey-dark-1':'#7E7E82',
      'grey-dark-2':'#373946',
      'grey-dark-3':'#4D5566',
      'grey-dark-4':'#403930',
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#3f3cbb',
      'silver': '#ecebff'
      
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}