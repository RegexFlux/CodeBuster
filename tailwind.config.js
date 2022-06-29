/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      spacing: {
        '112': '28rem'
      },
      colors: {
        "type-normal": '#a8a878',
        "type-fire": '#f08030',
        "type-water": '#6890f0',
        "type-grass": '#78c850',
        "type-electric": '#f8d030',
        "type-ice": '#f8d030',
        "type-fighting": '#c03028',
        "type-poison": '#a040a0',
        "type-ground": '#e0c068',
        "type-flying": '#a890f0',
        "type-psychic": '#f85888',
        "type-bug": '#a8b820',
        "type-rock": '#b8a038',
        "type-ghost": '#705898',
        "type-dark": '#705848',
        "type-dragon": '#7038f8',
        "type-steel": '#b8b8d0',
        "type-fairy": '#f0b6bc',
      }
    },
  },
  plugins: [],
}
