import { showLoader } from './toggleLoader.js'
const fetchMeals = async (url) => {
  showLoader()
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default fetchMeals
