/*
========================
FB counter
=======================
*/
function getElement(selector) {
  const element = document.querySelector(selector)
  if (element) {
    return element
  }
  throw new Error(
    `please check your "${selector}" selector, no such element exists`
  )
}
/*
======================================================
 // select elements
const FBdecrease = getElement('.fb-decrease')
const FBincrease = getElement('.fb-increase')
const FBreset = getElement('.fb-reset')
const FBcounterValue = getElement('.counter-value')
// int value
let FBvalue = 0
// decraes
function decraes() {
  FBvalue--
  if (FBvalue < 0) {
    FBvalue = 0
  }
  FBcounterValue.textContent = FBvalue
}
// increase
function increas() {
  FBvalue++
  FBcounterValue.textContent = FBvalue
}
// reset
function reset() {
  FBvalue = 0
  FBcounterValue.textContent = FBvalue
}

FBdecrease.addEventListener('click', decraes)

FBincrease.addEventListener('click', increas)

FBreset.addEventListener('click', reset)
===============================================================
*/
let value = 0

function counter(element, value) {
  // select element
  const incraeseBtn = element.querySelector('.fb-increase')
  const decraeseBtn = element.querySelector('.fb-decrease ')
  const resetBtn = element.querySelector('.fb-reset')
  const counterValue = element.querySelector('.counter-value')
  counterValue.textContent = value
  // addevent
  incraeseBtn.addEventListener('click', increase)
  decraeseBtn.addEventListener('click', decraese)
  resetBtn.addEventListener('click', reset)
  // funtions
  function increase() {
    value++
    counterValue.textContent = value
  }
  function decraese() {
    value--
    if (value < 0) {
      value = 0
    }
    counterValue.textContent = value
  }
  function reset() {
    value = 0
    counterValue.textContent = value
  }
}

counter(getElement('.fb-counter'), value)

/*
========================
OOP counter
=======================
*/

// select elements
class OOPcounter {
  constructor(element, value) {
    this.element = element
    this.value = value
    this.resetBtn = element.querySelector('.oop-reset')
    this.decreaseBtn = element.querySelector('.oop-decrease')
    this.increaseBtn = element.querySelector('.oop-increase')
    this.counterValue = element.querySelector('.counter-value')
    this.counterValue.textContent = this.value
    // add events to btn

    this.decreaseBtn.addEventListener('click', this.decrease.bind(this))
    this.increaseBtn.addEventListener('click', this.increase.bind(this))
    this.resetBtn.addEventListener('click', this.reset.bind(this))
  }

  decrease() {
    this.value--
    if (this.value < 0) {
      this.value = 0
    }
    this.counterValue.textContent = this.value
  }

  increase() {
    this.value++
    this.counterValue.textContent = this.value
  }

  reset() {
    this.value = 0
    this.counterValue.textContent = this.value
  }
}

const oopCounter = new OOPcounter(getElement('.oop-counter'), 0)
