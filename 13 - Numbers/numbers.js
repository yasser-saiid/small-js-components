const allNumbers = document.querySelectorAll('.number')

allNumbers.forEach((item) => {
  updateCount(item)
})

function updateCount(element) {
  const value = parseInt(element.dataset.value)
  const increment = Math.ceil(value / 1000)
  let intValue = 0

  const increaseCount = setInterval(function () {
    intValue += increment

    if (intValue > value) {
      element.textContent = `${value}+`
      clearInterval(increaseCount)

      return
    }

    element.textContent = `${intValue}+`
  }, 1)
}
