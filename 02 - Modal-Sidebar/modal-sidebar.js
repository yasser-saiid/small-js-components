/* 
==============
modal
==============
*/
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const openModal = document.querySelectorAll('.show-more')
const colseModal = document.querySelector('.close-modal')

openModal.forEach((btn) => {
  btn.addEventListener('click', function (evt) {
    const clone = evt.target.parentElement.previousElementSibling.src
    modal.classList.add('show-modal')
    modalContent.innerHTML = `<img src=${clone} alt="img-1" class="img">`
  })
})

colseModal.addEventListener('click', function () {
  modal.classList.remove('show-modal')
})

/* 
=================
sidebar
=================
*/
const sidebarOpenBtn = document.querySelector('.sidebar-open-btn')
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn')
const sidebar = document.querySelector('.sidebar')

sidebarOpenBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
sidebarCloseBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
