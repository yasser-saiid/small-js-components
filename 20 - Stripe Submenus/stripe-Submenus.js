import fetchUsers from './js/fetch-users.js'
import displayUsers from './js/displayUsers.js'
import pagination from './js/pagination.js'
import displayBtns from './js/dispalybuttons.js'

const loading = document.querySelector('.loading')
const btnsContainer = document.querySelector('.btn-container')

let index = 0
let pages = []
const displayUI = () => {
  displayUsers(pages[index])
  displayBtns(btnsContainer, pages, index)
}

const init = async () => {
  const users = await fetchUsers()
  loading.style.display = 'none'
  pages = pagination(users)
  displayUI()
}

btnsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next')) {
    index++

    if (index > pages.length - 1) {
      index = pages.length - 1
    }
  }
  if (e.target.classList.contains('prev')) {
    index--

    if (index < 0) {
      index = 0
    }
  }
  displayUI()
})

window.addEventListener('load', init)
