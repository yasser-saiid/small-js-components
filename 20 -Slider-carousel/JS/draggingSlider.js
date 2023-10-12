import getElement from './getElement.js'

const carousle = getElement('.carousle')

let isDragging = false,
  startX,
  startScrollLeft

export function dragging(e) {
  if (!isDragging) return
  carousle.scrollLeft = startScrollLeft - (e.pageX - startX)
}

export function startDragging(e) {
  isDragging = true
  carousle.classList.add('dragging')
  startX = e.pageX
  startScrollLeft = carousle.scrollLeft
}

export function stopDragging(e) {
  isDragging = false
  carousle.classList.remove('dragging')
}
