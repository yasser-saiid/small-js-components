const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  const questionBtn = question.querySelector('.question-btn')
  questionBtn.addEventListener('click', () => {
    questions.forEach((currentQuestion) => {
      if (question !== currentQuestion) {
        currentQuestion.classList.remove('active')
      }
    })

    question.classList.toggle('active')
  })
})
