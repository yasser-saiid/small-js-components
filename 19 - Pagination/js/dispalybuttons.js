const displayBtns = (container, pages, activeIndex) => {
  let btns = pages.map((_, index) => {
    return `<button class="page-btn ${
      index === activeIndex ? 'active' : 'null'
    }" data-index="${index}">${index + 1}</button>`
  })

  btns.push(
    `<button class="next"><i class="fa fa-chevron-right next"></i></button>`
  )
  btns.unshift(
    `<button class="prev"><i class="fa fa-chevron-left prev"></i></button>`
  )

  container.innerHTML = btns.join('')
}

export default displayBtns
