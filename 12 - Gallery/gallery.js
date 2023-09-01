// function to selected element
function getElement(selected) {
  const element = document.querySelector(selected)
  if (element) {
    return element
  }
  throw new Error(
    `please check your "${selector}" selector, no such element exists`
  )
}

// gallery constractor
function Gallery(element) {
  this.container = element
  this.imgList = [...element.querySelectorAll('.img')]
  // select modal items
  this.modal = getElement('.modal')
  this.modalMainImg = getElement('.main-img')
  this.mainModalImgName = getElement('.img-name')
  this.modalImgs = getElement('.modal-imgs')
  this.closeMoalBtn = getElement('.close-btn')
  this.prevBtn = getElement('.prev-btn')
  this.nextBtn = getElement('.next-btn')
  // bind btn function event
  this.closeModal = this.closeModal.bind(this)
  this.nextImg = this.nextImg.bind(this)
  this.prevImg = this.prevImg.bind(this)
  this.chooseImg = this.chooseImg.bind(this)
  // open modal
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.imgList)
      }
    }.bind(this)
  )
}

// gallery modal prototype functionalty
// open modal
Gallery.prototype.openModal = function (selectedImg, list) {
  this.setModalMainImg(selectedImg)
  this.setModalImgs(selectedImg, list)
  this.modal.classList.add('open')
  // close modal
  this.closeMoalBtn.addEventListener('click', this.closeModal)
  // display next img
  this.nextBtn.addEventListener('click', this.nextImg)
  // display prev img
  this.prevBtn.addEventListener('click', this.prevImg)
  //
  this.modalImgs.addEventListener('click', this.chooseImg)
}
// set modal main img
Gallery.prototype.setModalMainImg = function (selectdeImg) {
  this.modalMainImg.src = selectdeImg.src
  this.mainModalImgName.textContent = selectdeImg.title
}
// set modal imgs
Gallery.prototype.setModalImgs = function (selectdeImg, list) {
  const modalImgs = list
    .map(function (img) {
      return `<img
              src="${img.src}"
              class="img ${
                img.dataset.id === selectdeImg.dataset.id
                  ? 'modal-img selected'
                  : 'modal-img'
              }"
              title="${img.title}"
              data-id="${img.dataset.id}"
            />`
    })
    .join('')
  this.modalImgs.innerHTML = modalImgs
}

// close modal
Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open')
  // remove all events whene close modal
  this.closeMoalBtn.removeEventListener('click', this.closeModal)
  this.nextBtn.removeEventListener('click', this.nextImg)
  this.prevBtn.removeEventListener('click', this.prevImg)
}
// next img
Gallery.prototype.nextImg = function () {
  const selected = this.modalImgs.querySelector('.selected')
  const next = selected.nextElementSibling || this.modalImgs.firstElementChild
  selected.classList.remove('selected')
  next.classList.add('selected')
  this.setModalMainImg(next)
}
// prev img
Gallery.prototype.prevImg = function () {
  const selected = this.modalImgs.querySelector('.selected')
  const prev =
    selected.previousElementSibling || this.modalImgs.lastElementChild
  selected.classList.remove('selected')
  prev.classList.add('selected')
  this.setModalMainImg(prev)
}
// choose or selected specefic img
Gallery.prototype.chooseImg = function (e) {
  const selected = this.modalImgs.querySelector('.selected')
  selected.classList.remove('selected')
  if (e.target.classList.contains('modal-img')) {
    this.setModalMainImg(e.target)
  }
  e.target.classList.add('selected')
}

const lights = new Gallery(getElement('.lights'))
const nature = new Gallery(getElement('.nature'))
