import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Open Sans', 'sans serif'],
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
    {
      name: 'Lora',
      styles: [100, 200, 400, 600, 900],
    },
    {
      name: 'Open Sans',
      styles: [100, 200, 400, 600, 900],
    },
  ],
})
export default typography
