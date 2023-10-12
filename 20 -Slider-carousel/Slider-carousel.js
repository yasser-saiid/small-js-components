import getElement from './JS/getElement.js'
import displayElement from './JS/dispalyElement.js'
import { dragging, startDragging, stopDragging } from './JS/draggingSlider.js'
import nextCard from './JS/nextCard.js'
import prevCard from './JS/prevCard.js'

const carousle = getElement('.carousle')
const prevBtn = getElement('.prev-btn')
const nextBtn = getElement('.next-btn')

// load all caruosel cards whene page loaded
window.addEventListener('DOMContentLoaded', displayElement)

// dargging cards whene mouse move on carousel
carousle.addEventListener('mousemove', dragging)
carousle.addEventListener('mousedown', startDragging)
carousle.addEventListener('mouseup', stopDragging)

// next slider card and prev
prevBtn.addEventListener('click', prevCard)
nextBtn.addEventListener('click', nextCard)
