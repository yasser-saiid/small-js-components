// our team data
const teamData = [
  {
    id: 1,
    name: 'jhon doe',
    title: 'ui / ux',
    img: './Images/team-1.jpg',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusnihil, et doloribus impedit adipisci minima illo necessitatibus',
  },
  {
    id: 2,
    name: 'jhon doe',
    title: 'web designer',
    img: './Images/team-2.jpg',
    quote:
      'amet consectetur adipisicing elit. Minusnihil, et doloribus impedit adipisci minima illo necessitatibus sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    name: 'jhon doe',
    title: 'FE-Developre',
    img: './Images/team-3.jpg',
    quote:
      ' adipisicing elit. adipisicing elit. Minusnihil, et doloribus impedit adipisci minima adipisicing elit. illo necessitatibus',
  },
  {
    id: 4,
    name: 'jhon doe',
    title: 'BE-Deveolpre',
    img: './Images/team-4.jpg',
    quote:
      ' Minusnihil, et doloribus impedit adipisci minima illo  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusnihil, et doloribus impedit adipisci minima illo necessitatibus',
  },
]

// old way -- legacy code
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const quote = document.querySelector('.quote p')
const name = document.querySelector('.name h4')
const title = document.querySelector('.name span')
const image = document.querySelector('.member-img img')
let indexItem = 0

window.addEventListener('DOMContentLoaded', function () {
  showTeamMember(indexItem)
})
// show person
function showTeamMember(member) {
  const currntItem = teamData[member]
  quote.textContent = currntItem.quote
  image.src = currntItem.img
  name.textContent = currntItem.name
  title.textContent = currntItem.title
}

prevBtn.addEventListener('click', function () {
  indexItem--
  if (indexItem < 0) {
    indexItem = teamData.length - 1
  }
  showTeamMember(indexItem)
})
nextBtn.addEventListener('click', function () {
  indexItem++
  if (indexItem > teamData.length - 1) {
    indexItem = 0
  }
  showTeamMember(indexItem)
})
