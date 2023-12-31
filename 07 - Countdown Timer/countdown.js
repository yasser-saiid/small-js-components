const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November ',
  'December',
]

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const deadLind = document.querySelector('.dead-line')

// set deadline date dynamic
const deadLindDate = new Date(2024, 0, 1, 20, 30, 0)
// set full date and time format Thursday, 20 July 2023 17:30 pm
const weekday = weekdays[deadLindDate.getDay()]
const date = deadLindDate.getDate()
const month = months[deadLindDate.getMonth()]
const year = deadLindDate.getFullYear()
const hour = deadLindDate.getHours()
const minutes = deadLindDate.getMinutes()

deadLind.textContent = `${weekday}, ${date} ${month} ${year} ${hour}:${minutes} pm`

// calculate remaining date and time countdown timer
const timeFormat = document.querySelectorAll('.time-format')
const countTimerContainer = document.querySelector('.count-timer')

// deadline time in milliseconds
const futureDeadLindDate = deadLindDate.getTime()

function getremainingTime() {
  const currentTime = new Date().getTime()
  const remainingTime = futureDeadLindDate - currentTime

  // remaining time in milliseconds
  const oneDay = 24 * 60 * 60 * 1000
  const onehour = 60 * 60 * 1000
  const oneMinutes = 60 * 1000

  const days = Math.floor(remainingTime / oneDay)
  const hours = Math.floor((remainingTime % oneDay) / onehour)
  const mintues = Math.floor((remainingTime % onehour) / oneMinutes)
  const secondes = Math.floor((remainingTime % oneMinutes) / 1000)
  const allRminingValues = [days, hours, mintues, secondes]

  function formatTime(timeItem) {
    if (timeItem < 10) {
      return `0${timeItem}`
    } else {
      return timeItem
    }
  }
  timeFormat.forEach(function (time, index) {
    time.textContent = formatTime(allRminingValues[index])
  })
  if (remainingTime < 0) {
    clearInterval(countdown)
    countTimerContainer.innerHTML = `<h2 class="count-finshed">we're available now</h2>`
  }
}

const countdown = setInterval(getremainingTime, 1000)
getremainingTime()

//  set digital clock
const digitalClock = document.querySelector('.digital-clock')
function clock() {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const mintues = currentTime.getMinutes()
  const secondes = currentTime.getSeconds()
  function fromatTime(timeItem) {
    if (timeItem < 10) {
      return `0${timeItem}`
    } else {
      return timeItem
    }
  }
  const clockHour = digitalClock.querySelector('.hours')
  const clockMinute = digitalClock.querySelector('.minutes')
  const clockSecond = digitalClock.querySelector('.seconds')

  clockHour.textContent = `${fromatTime(hours)}:`
  clockMinute.textContent = `${fromatTime(mintues)}:`
  clockSecond.textContent = `${fromatTime(secondes)}`
}

const digital = setInterval(clock, 1000)
