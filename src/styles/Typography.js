import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyFontFamily: ['Mulish', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [100, 200, 400, 600, 900],
    },
    {
      name: 'Mulish',
      styles: [200, 300, 400, 500, 700],
    },
  ],
})
export default typography
