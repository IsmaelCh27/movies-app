/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './presentation/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#E2190A',
        secondary: '#D05A04',
        background: '#0F0F0F', //#0F0F0F #1E1E1E #6F6F70 #4B4B4C
        surface: '#1A1A1A',
        foreground: '#FFFFFF',
        primaryForeground: '#6F6F70',
        secondaryForeground: '#4B4B4C',
      },
      fontFamily: {
        'open-sans-light': ['OpenSans-Light', 'sans-serif'],
        'open-sans': ['OpenSans-Regular', 'sans-serif'],
        'open-sans-medium': ['OpenSans-Medium', 'sans-serif'],
        'open-sans-semibold': ['OpenSans-SemiBold', 'sans-serif'],
        'open-sans-bold': ['OpenSans-Bold', 'sans-serif'],
        'open-sans-extrabold': ['OpenSans-ExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
