const getJoke = document.querySelector('.get-joke')
const jokeContainer = document.querySelector('.joke-container .joke')
const url = `https://api.chucknorris.io/jokes/random`

getJoke.addEventListener('click', () => {
  getData(url)
})

function getData(api) {
  const newRequset = new XMLHttpRequest()
  newRequset.open('GET', api)
  newRequset.send()

  newRequset.onreadystatechange = function () {
    if (newRequset.readyState !== 4) return
    if (newRequset.status === 200) {
      const { value: joke } = JSON.parse(newRequset.responseText)
      jokeContainer.textContent = joke
    } else {
      console.log({
        status: newRequset.status,
        text: newRequset.statusText,
      })
    }
  }
}
