const getJoke = document.querySelector('.get-joke')
const jokeContainer = document.querySelector('.joke-container .joke')
const url = `https://api.chucknorris.io/jokes/random`

getJoke.addEventListener('click', () => {
  getData(url)
    .then((response) => displayJoke(response))
    .catch((error) => console.log(error))
})

function getData(api) {
  return new Promise((resolve, reject) => {
    const newRequset = new XMLHttpRequest()
    newRequset.open('GET', api)
    newRequset.send()

    newRequset.onreadystatechange = function () {
      if (newRequset.readyState !== 4) return
      if (newRequset.status === 200) {
        resolve(newRequset.responseText)
      } else {
        reject({
          status: newRequset.status,
          text: newRequset.statusText,
        })
      }
    }
  })
}

function displayJoke(data) {
  const { value: joke } = JSON.parse(data)
  jokeContainer.textContent = joke
}
