import getElement from './getElement.js'
import { hideLoader } from './toggleLoader.js'

const displayMeals = ({ meals }) => {
  const mealsContainer = getElement('.meals-container')
  const subTitle = getElement('.sub-title')

  if (!meals) {
    hideLoader()
    subTitle.textContent = 'sorry, no meals matched your search'
    mealsContainer.innerHTML = null
  }
  const newMeals = meals
    .map((meal) => {
      const { idMeal: id, strMeal: name, strMealThumb: img } = meal
      return `<a href="./single-meal.html" data-id="${id}" class="male">
            <article class="single-male">
              <div class="ovrlay">
                <span>see more details</span>
              </div>
              <img
                src="${img}"
                alt="${name}"
                class="img meal-img"
              />
              <div class="meal-name">${name}</div>
            </article>
          </a>`
    })
    .join('')
  hideLoader()
  subTitle.textContent = ''
  mealsContainer.innerHTML = newMeals
  return mealsContainer
}

export default displayMeals
