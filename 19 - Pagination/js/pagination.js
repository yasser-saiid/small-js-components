const pagination = (users) => {
  // how many user in every page
  const itemPerPage = 8
  // how many pages i need to all user
  const numberOfPages = Math.ceil(users.length / itemPerPage)
  // return array of array's
  const newUsersArray = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemPerPage
    return users.slice(start, start + itemPerPage)
  })
  return newUsersArray
}

export default pagination
