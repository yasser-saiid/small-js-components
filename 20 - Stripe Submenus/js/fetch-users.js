const URL = 'https://api.github.com/users'

const fetchUsers = async () => {
  const response = await fetch(URL)
  const data = response.json()
  return data
}

export default fetchUsers
