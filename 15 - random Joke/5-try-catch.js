const getJoke = document.querySelector('.get-joke')
const jokeContainer = document.querySelector('.joke-container .joke')
const url = `https://api.chucknorris.io/jokes/random`

getJoke.addEventListener('click', () => {
  getData(url)
})

async function getData(api) {
  try {
    const response = await fetch(api)
    const data = await response.json()
    displayJoke(data)
  } catch (error) {
    console.log(error)
  }
}

function displayJoke(data) {
  const { value: joke } = data
  jokeContainer.textContent = joke
}
