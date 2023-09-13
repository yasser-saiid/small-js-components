import dispalySingleMeal from './src/displaySingleMeal.js'
import fetchMeals from './src/fetchingData.js'

const showSingleMeal = async () => {
  const id = localStorage.getItem('meal')
  if (!id) window.location.replace('meals.html')
  // get single meal
  const singleMeal = await fetchMeals(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  // display single meal
  dispalySingleMeal(singleMeal)
}

window.addEventListener('DOMContentLoaded', showSingleMeal)
