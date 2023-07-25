// toggle navbar links show & hidden
const btnToggle = document.querySelector('.nav-toggle')
const navLinksContainer = document.querySelector('.nav-links-container')
const navLinks = document.querySelector('.links')

btnToggle.addEventListener('click', function () {
  const linksContainerHeight = navLinksContainer.getBoundingClientRect().height
  const linksHeight = navLinks.getBoundingClientRect().height
  if (linksContainerHeight === 0) {
    navLinksContainer.style.height = `${linksHeight}px`
    btnToggle.classList.add('active')
  } else {
    navLinksContainer.style.height = 0
    btnToggle.classList.remove('active')
  }
})

// toggle class active for links
const links = document.querySelectorAll('.link')
links.forEach(function (link) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault()
    links.forEach(function (link) {
      link.classList.remove('active')
    })
    evt.currentTarget.classList.add('active')
    navLinksContainer.style.height = 0
    btnToggle.classList.remove('active')
  })
})
