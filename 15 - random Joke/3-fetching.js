const getJoke = document.querySelector('.get-joke')
const jokeContainer = document.querySelector('.joke-container .joke')
const url = `https://api.chucknorris.io/jokes/random`

getJoke.addEventListener('click', () => {
  getData(url)
})

function getData(api) {
  fetch(api)
    .then((response) => response.json())
    .then((data) => displayJoke(data))
}

function displayJoke(data) {
  const { value: joke } = data
  jokeContainer.textContent = joke
}
