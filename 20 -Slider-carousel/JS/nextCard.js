import getElement from './getElement.js'

const carousle = getElement('.carousle')
const carousleCardWidth = carousle.querySelector('.carousle-card')

function nextCard() {
  carousle.scrollLeft += 100
}

export default nextCard
