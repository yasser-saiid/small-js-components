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

const allGalleryImages = document.querySelectorAll('.img')
const lightsImages = document.querySelectorAll('.lights .img')
const natureImages = document.querySelectorAll('.nature .img')
// select modal items
const modal = getElement('.modal')
const closeMoalBtn = getElement('.close-btn')
const moalNextBtn = getElement('.next-btn')
const moalPrevBtn = getElement('.prev-btn')
const modalMainImg = getElement('.main-img')
const mainModalImgName = getElement('.img-name')
const modalImgs = getElement('.modal-imgs')

/*
====================
gallery function
===================
*/

lightsImages.forEach((img) => {
  img.addEventListener('click', function (e) {
    openModal(e.target, lightsImages)
  })
})
natureImages.forEach((img) => {
  img.addEventListener('click', function (e) {
    openModal(e.target, natureImages)
  })
})

// open modal and set main element
function openModal(selectdeImg, imgList) {
  modal.classList.add('open')
  setModalMainImg(selectdeImg)
  setModalImgs(selectdeImg, imgList)
}
//set modal main image
function setModalMainImg(selectdeImg) {
  modalMainImg.src = selectdeImg.src
  mainModalImgName.textContent = selectdeImg.title
}
//set modal small image
function setModalImgs(selectdeImg, list) {
  const imgsListArray = [...list]
  const imgs = imgsListArray
    .map((img) => {
      return ` <img
              src="${img.src}"
              class="img ${
                selectdeImg.dataset.id === img.dataset.id
                  ? 'modal-img selected'
                  : 'modal-img'
              }"
              title="${img.title}"
              data-id="${img.dataset.id}"
            />`
    })
    .join('')
  modalImgs.innerHTML = imgs
}
//chosse main image from small modal images
modalImgs.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-img')) {
    chosseImg(e)
  }
})
function chosseImg(e) {
  const selected = modalImgs.querySelector('.selected')
  selected.classList.remove('selected')
  e.target.classList.add('selected')
  setModalMainImg(e.target)
}
// next img
moalNextBtn.addEventListener('click', nextImg)
function nextImg() {
  const selected = modalImgs.querySelector('.selected')
  const next = selected.nextElementSibling || modalImgs.firstElementChild
  selected.classList.remove('selected')
  next.classList.add('selected')
  setModalMainImg(next)
}
// prev img
moalPrevBtn.addEventListener('click', prevImg)
function prevImg() {
  const selected = modalImgs.querySelector('.selected')
  const prev = selected.previousElementSibling || modalImgs.lastElementChild
  selected.classList.remove('selected')
  prev.classList.add('selected')
  setModalMainImg(prev)
}

// close modal
closeMoalBtn.addEventListener('click', closeModal)
function closeModal() {
  modal.classList.remove('open')
}
