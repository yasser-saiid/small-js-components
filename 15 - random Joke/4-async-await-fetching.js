const getJoke = document.querySelector('.get-joke')
const jokeContainer = document.querySelector('.joke-container .joke')
const url = `https://api.chucknorris.io/jokes/random`

getJoke.addEventListener('click', () => {
  getData(url)
})

async function getData(api) {
  const response = await fetch(api)
  const data = await response.json()
  displayJoke(data)
}

function displayJoke(data) {
  const { value: joke } = data
  jokeContainer.textContent = joke
}

/* 
=====================
try/catch
======================
*/
