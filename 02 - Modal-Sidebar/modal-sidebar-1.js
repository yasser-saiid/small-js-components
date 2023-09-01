// show and hide sidebar
const sideBar = document.querySelector('.sidebar')
const openSideBtn = document.querySelector('.sidebar-open-btn')
const closeSideBtn = document.querySelector('.sidebar-close-btn')

openSideBtn.addEventListener('click', () => {
  sideBar.classList.add('show-sidebar')
})
closeSideBtn.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar')
})

// set modal
const galleryItems = document.querySelectorAll('.gallery-item')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close-modal')
const modalImg = document.querySelector('.modal-img')

galleryItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    const element = e.target
    const src = e.target.parentElement.previousElementSibling.src
    if (element.classList.contains('show-more')) {
      modal.classList.add('show-modal')
    }
    setModalImg(src)
  })
})

closeModalBtn.addEventListener('click', function () {
  modal.classList.remove('show-modal')
})

function setModalImg(src) {
  modalImg.src = src
}
