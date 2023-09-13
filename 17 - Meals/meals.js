import showMeals from './src/showMeals.js'

import './src/searchMeal.js'

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'

window.addEventListener('DOMContentLoaded', () => {
  showMeals(URL)
})
