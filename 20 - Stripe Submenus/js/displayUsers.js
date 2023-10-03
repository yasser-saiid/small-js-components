const userContainer = document.querySelector('.users-center')
const displayUsers = (users) => {
  const newUsers = users
    .map((user) => {
      const { login, avatar_url, html_url } = user
      return `<article class="user-card">
            <img src="${avatar_url}" alt="${login}" class="img" />
            <h5>${login}</h5>
            <a href="${html_url}" target="_blank" class="btn">view profile</a>
          </article>`
    })
    .join('')

  userContainer.innerHTML = newUsers
}

export default displayUsers
