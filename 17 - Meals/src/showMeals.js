import fetchMeals from './fetchingData.js'
import displayMeals from './displayMeals.js'
import setSingleMeal from './setSingleMeal.js'
const showMeals = async (url) => {
  // fetching drinks
  const meals = await fetchMeals(url)
  // display drinks
  const allMeal = await displayMeals(meals)
  if (allMeal) {
    setSingleMeal(allMeal)
  }
}

export default showMeals
