import { getElement, getAllElements } from './getElement.js'
const userImg = getElement('.user-img')
const userTitle = getElement('.user-title')
const userValue = getElement('.user-value')
const getUserValues = getAllElements('.icon')

function displayUser(person) {
  // display person card info
  userImg.src = person.img
  userTitle.textContent = `my name is`
  userValue.textContent = person.name
  removeActive(getUserValues)
  getUserValues[0].classList.add('active')
  getUserValues.forEach(function (item) {
    const label = item.dataset.label
    item.addEventListener('click', () => {
      userTitle.textContent = `my ${label} is`
      userValue.textContent = person[label]
      removeActive(getUserValues)
      item.classList.add('active')
    })
  })
}

function removeActive(items) {
  items.forEach((item) => item.classList.remove('active'))
}

export default displayUser
