// select all element
const form = document.querySelector('.form')
const input = document.getElementById('goal')
const addGoalBtn = document.querySelector('.add-goal')
const goalsContainer = document.querySelector('.goals-container')
const goalsList = document.querySelector('.goal-list')
const goalAlert = document.querySelector('.alert')
const clearBtn = document.querySelector('.clear')
// variables for editing element
let editElemnt
let editFlag = false
let editID = ''

form.addEventListener('submit', addGoal)
clearBtn.addEventListener('click', clearGoalItems)
window.addEventListener('DOMContentLoaded', displayGoalsItems)
/* 
=================== 
funtionality
===================
  */
// added new goal ro the list
function addGoal(e) {
  e.preventDefault()
  const goal = input.value
  const id = new Date().getTime().toString()
  // cases whene you to add goal or edit goal
  if (goal && !editFlag) {
    // display ale
    dispalyAlert('you added new goal .', 'success')
    // create goal element
    createGoalItem(id, goal)
    // display goalsContainer
    goalsContainer.style.display = 'block'
    // added goal to localStorge
    addToLocalStorge(id, goal)
    // setback to default = input & editFlag
    setBackToDefault()
  } else if (goal && editFlag) {
    editElemnt.textContent = goal
    dispalyAlert(`you update your goal !`, 'success')
    editLocalStorage(editID, goal)
    setBackToDefault()
  } else {
    // display alert
    dispalyAlert('please inter your goal !', 'warning')
  }
}

// dispaly alert in all cases to goal
function dispalyAlert(text, action) {
  const goalAlert = document.querySelector('.alert')
  goalAlert.textContent = text
  goalAlert.classList.add(action)
  // remove alert
  setTimeout(function () {
    goalAlert.textContent = ''
    goalAlert.classList.remove(action)
  }, 1500)
}

// set back to default = set input and editFlag to default setup
function setBackToDefault() {
  input.value = ''
  editFlag = false
  editID = ''
  addGoalBtn.textContent = 'add'
  input.blur()
}

// delete all goal's item from the list
function clearGoalItems() {
  const allGoals = document.querySelectorAll('.goal-item')
  if (allGoals.length > 0) {
    allGoals.forEach(function (goalItem) {
      goalsList.removeChild(goalItem)
    })
  }
  goalsContainer.style.display = 'none'
  dispalyAlert("you clear all goal's", 'danger')
  setBackToDefault()
  localStorage.removeItem('list')
}

// delete single goal item selected
function deleteGoalItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  const elementName = element.querySelector('.goal-name').textContent
  goalsList.removeChild(element)
  if (goalsList.children.length === 0) {
    goalsContainer.style.display = 'none'
  }
  dispalyAlert(`you delete  "${elementName}"  goal`, 'danger')
  setBackToDefault()
  // remove from localStorage
  removeFromLocalStorage(id)
}

// edit goal item selected
function editGoalItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  editElemnt = element.querySelector('.goal-name')
  editID = id
  editFlag = true
  input.value = editElemnt.textContent
  input.focus()
  addGoalBtn.textContent = 'edit'
  dispalyAlert(`you will update "${editElemnt.textContent}" goal !`, 'warning')
}

/* 
========================= 
local storage 
========================== 
*/
function addToLocalStorge(id, goal) {
  const goalItem = { id, goal }
  let items = getLoacalStorageList()
  items.push(goalItem)
  localStorage.setItem('list', JSON.stringify(items))
}

function removeFromLocalStorage(id) {
  let items = getLoacalStorageList()
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item
    }
  })
  localStorage.setItem('list', JSON.stringify(items))
}

function editLocalStorage(id, goal) {
  let items = getLoacalStorageList()
  items = items.map(function (item) {
    if (item.id === id) {
      item.goal = goal
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}

function getLoacalStorageList() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}
/*
===================
setup gaol's 
================== 
*/
function displayGoalsItems() {
  let items = getLoacalStorageList()
  if (items.length > 0) {
    items.forEach(function (item) {
      createGoalItem(item.id, item.goal)
    })
    goalsContainer.style.display = 'block'
  }
}
function createGoalItem(id, goal) {
  const goalElement = document.createElement('div')
  goalElement.classList.add('goal-item')
  goalElement.setAttribute('data-id', id)
  goalElement.innerHTML = `<p class="goal-name">${goal}</p>
              <div class="btn-container">
                <button class="btn edit">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="btn delete">
                  <i class="fa fa-trash"></i>
                </button>
              </div>`

  // select delete and edit buttons
  const deleteBtn = goalElement.querySelector('.delete')
  const editBtn = goalElement.querySelector('.edit')
  deleteBtn.addEventListener('click', deleteGoalItem)
  editBtn.addEventListener('click', editGoalItem)

  // append goal element to gola's list
  goalsList.appendChild(goalElement)
}
