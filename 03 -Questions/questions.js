const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn')
  btn.addEventListener('click', function () {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('active')
      }
    })

    question.classList.toggle('active')
  })
})
