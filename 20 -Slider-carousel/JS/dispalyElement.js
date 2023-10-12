import pepole from './data.js'
import getElement from './getElement.js'

const carousle = getElement('.carousle')

function displayElement() {
  const cards = pepole
    .map((person, index) => {
      return `<li class="carousle-card" id="${index + 1}">
              <img src="${
                person.image
              }" alt="img" class="img" draggable="false"/>
              <h4 class="name">${person.name}</h4>
              <p class="title">${person.title}</p>
              <button class="btn about-btn">about me</button>
            </li>`
    })
    .join('')

  carousle.innerHTML = cards
}

export default displayElement
