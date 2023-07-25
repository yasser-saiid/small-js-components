const mainSliderItem = document.querySelectorAll('.main-slider-item')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

//for navigate to specifice item from main slider
mainSliderItem.forEach(function (slidItem, index) {
  slidItem.style.left = `${index * 100}%`
})

let counter = 0
prevBtn.addEventListener('click', function () {
  counter--
  slider()
})
nextBtn.addEventListener('click', function () {
  counter++
  slider()
})

function slider() {
  if (counter > mainSliderItem.length - 1) {
    counter = 0
  } else if (counter < 0) {
    counter = mainSliderItem.length - 1
  }
  /*  if (counter < mainSliderItem.length - 1) {
    nextBtn.style.display = 'inline-block'
  } else {
    nextBtn.style.display = 'none'
  }
  if (counter > 0) {
    prevBtn.style.display = 'inline-block'
  } else {
    prevBtn.style.display = 'none'
  } */
  mainSliderItem.forEach(function (slidItem) {
    slidItem.style.transform = `translateX(-${counter * 100}%)`
  })
}

// prevBtn.style.display = 'none'
