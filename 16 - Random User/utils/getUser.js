const URL = 'https://randomuser.me/api/'

async function getUser() {
  const response = await fetch(URL)
  const data = await response.json()
  const person = data.results[0]
  // destruction person obj
  const { large: img } = person.picture
  const { phone, email } = person
  const { age } = person.dob
  const { first, last } = person.name
  const { city, country } = person.location

  return {
    img,
    phone,
    email,
    age,
    name: `${first} ${last}`,
    address: `${city} - ${country}`,
  }
}

export default getUser
