const tabBtns = document.querySelectorAll('.tab-btn')
const boxContent = document.querySelectorAll('.box')

tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    const id = evt.target.dataset.id
    // remove active from other btn
    tabBtns.forEach(function (btn) {
      btn.classList.remove('active')
    })
    evt.target.classList.add('active')
    // hide other box content
    boxContent.forEach(function (box) {
      box.classList.remove('active')
      const specifcBox = document.getElementById(id)
      specifcBox.classList.add('active')
    })
  })
})
