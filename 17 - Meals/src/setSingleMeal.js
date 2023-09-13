const setSingleMeal = (allMeal) => {
  const meals = [...allMeal.querySelectorAll('.male')]
  meals.forEach((meal) => {
    meal.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id
      localStorage.setItem('meal', id)
    })
  })
}

export default setSingleMeal
