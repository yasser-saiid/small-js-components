import getElement from './getElement.js'
import showMeals from './showMeals.js'
const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const searchForm = getElement('.form')
const searchInput = getElement('.search-input')

searchForm.addEventListener('keyup', (e) => {
  e.preventDefault()
  const searchValue = searchInput.value
  if (!searchValue) return
  showMeals(`${URL}${searchValue}`)
})
