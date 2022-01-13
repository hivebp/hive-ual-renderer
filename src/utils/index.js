/*
 * Code inspired by Chris Coyier's vanilla css lighten/darken color solution
 * https://css-tricks.com/snippets/javascript/lighten-darken-color/
 */

const hexToRGB = (color) => {
  const num = parseInt(color.replace('#', ''), 16)
  const r = (num >> 16) - 30 // eslint-disable-line
  const b = ((num >> 8) & 0x00ff) - 30 // eslint-disable-line
  const g = (num & 0x0000ff) - 30 // eslint-disable-line
  return [r, b, g]
}

const limitValues = (value) => {
  if (value > 255) return 255
  if (value < 0) return 0
  return value
}

export const darkenColor = (color) => {
  let colors
  if (!color) {
    return '#1A3270'
  }
  if (color.indexOf('rgb') !== -1) {
    colors = color
      .replace('rgb(', '')
      .replace(')', '')
      .split(',')
      .map((num) => parseInt(num, 10) - 30)
      .map(limitValues)
  } else {
    colors = hexToRGB(color).map(limitValues)
  }
  const [r, g, b] = colors
  return `rgb(${r}, ${g}, ${b})`
}
