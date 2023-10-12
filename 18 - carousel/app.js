import pepoleData from './data.js'

const carouselCenter = document.querySelector('.carousel-center')
const container = document.querySelector('.carousel-cards-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

container.innerHTML = pepoleData
  .map((person, index) => {
    let postion = 'next'
    if (index === 0) {
      postion = 'active'
    } else if (index === pepoleData.length - 1) {
      postion = 'last'
    }
    return `<article class="card ${postion}">
            <img src="${person.img}" alt="${person.name}-image" class="img" />
            <div class="info">
              <h4 class="name">${person.name}</h4>
              <small class="title">${person.title}</small>
              <p class="qoute">
                ${person.quote}
              </p>
            </div>
          </article>`
  })
  .join('')
// move cards to left side
function prevSlid() {
  const active = container.querySelector('.active')
  const last = container.querySelector('.last')
  let next = active.nextElementSibling || container.firstElementChild

  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}

// move cards to right side
function nextSlid() {
  const active = container.querySelector('.active')
  const last = container.querySelector('.last')
  let next = last.previousElementSibling || container.lastElementChild

  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  active.classList.add('next')
  last.classList.add('active')
  next.classList.add('last')
}

prevBtn.addEventListener('click', () => {
  prevSlid()
})
nextBtn.addEventListener('click', () => {
  nextSlid()
})

const autoSlide = () => {
  const auto = setInterval(function () {
    prevSlid()
  }, 1500)

  carouselCenter.addEventListener('mouseover', () => {
    clearInterval(auto)
  })
}

autoSlide()

carouselCenter.addEventListener('mouseleave', () => {
  autoSlide()
})
