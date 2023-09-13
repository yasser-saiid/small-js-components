import { getElement } from './utils/getElement.js'
import getUser from './utils/getUser.js'
import displayUser from './utils/displayUser.js'
const getRandomUser = getElement('.get-user')

async function showUser() {
  // get random user
  const person = await getUser()
  // display user
  displayUser(person)
}

window.addEventListener('DOMContentLoaded', showUser)
getRandomUser.addEventListener('click', showUser)
