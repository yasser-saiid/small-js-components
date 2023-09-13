import getElement from './getElement.js'
import { hideLoader } from './toggleLoader.js'

const dispalySingleMeal = (singleMeal) => {
  hideLoader()
  const meal = singleMeal.meals[0]
  // destructions
  const {
    strMeal: name,
    strArea: cuntory,
    strInstructions: description,
    strMealThumb: img,
    strYoutube,
  } = meal

  const ingredientList = [
    meal.strIngredient1,
    meal.strIngredient2,
    meal.strIngredient3,
    meal.strIngredient4,
    meal.strIngredient5,
    meal.strIngredient6,
    meal.strIngredient7,
    meal.strIngredient8,
    meal.strIngredient9,
    meal.strIngredient10,
  ]

  const seeMore = true

  const mealContainer = getElement('.meal-info')

  mealContainer.innerHTML = `<img
            src="${img}"
            alt="${name}"
            class="img meal-img"
          />
          <div class="description">
            <h5 class="name">${name}</h5>
            <p class="from">${cuntory}</p>
            <p class="desc">
              <span>Instructions</span>
              ${description.slice(0, 150)}..
              <a href="${strYoutube}" class="see-more" target="_blank">to more Instructions on youtube</a>
            </p>
            <div class="ingredients">
              <span>ingredients</span>
              <ul>
               ${ingredientList
                 .map((ingredient) => {
                   if (!ingredient) return
                   return `<li class="ingredient">${ingredient},</li>`
                 })
                 .join('')}
              </ul>
            </div>
          </div>`

  const moreBtn = mealContainer.querySelector('.more-btn')
}

export default dispalySingleMeal
