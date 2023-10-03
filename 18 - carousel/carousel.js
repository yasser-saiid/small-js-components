import pepoleData from './data.js'

const container = document.querySelector('.carousel-cards-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

container.innerHTML = pepoleData
  .map((person, index) => {
    const { img, name, title, quote } = person
    let postion = 'next'
    // first one must have class active
    if (index === 0) {
      postion = 'active'
    }
    // the last one  must have class prev
    if (index === pepoleData.length - 1) {
      postion = 'last'
    }
    //and  everyone bettwen the first and last have class next

    return `<article class="card ${postion}">
            <img src="${img}" alt="${name}-image" class="img" />
            <div class="info">
              <h4 class="name">${name}</h4>
              <small class="title">${title}</small>
              <p class="qoute">
                ${quote}
              </p>
            </div>
          </article>`
  })
  .join('')

const togglecarousel = (type) => {
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling
  if (!next) {
    next = container.firstElementChild
  }
  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])
  // in type case
  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling
    if (!next) {
      next = container.lastElementChild
    }
    next.classList.remove(['next'])
    next.classList.add('last')
    return
  }

  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}

prevBtn.addEventListener('click', () => {
  togglecarousel('prev')
})

nextBtn.addEventListener('click', () => {
  togglecarousel()
})

/* 
const togglecarousel = (type) => {
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling

  if (!next) {
    next = container.firstElementChild
  }

  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next.classList.add('last')
    return
  }

  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
} */
