// import all product from data.js file
let products = [...allProducts]

// select all elements
function getElement(selector) {
  const element = document.querySelector(selector)
  if (element) {
    return element
  }
  throw new Error(
    `please check your "${selector}" selector, no such element exists`
  )
}
const form = getElement('.form')
const searchInput = getElement('.search-input')
const categoryBtnsContainer = getElement('.btn-container')
const productsContainer = getElement('.products-center')

// dispaly (render) all products in our page
const dispalyProducts = () => {
  if (products.length < 1) {
    productsContainer.innerHTML = `<h5>sorry, no products matched your search</h5>`
    return
  }

  productsContainer.innerHTML = products
    .map((product) => {
      const { id, name, price, img } = product
      return `<article class="product" data-id="${id}">
          <img src="${img}" class="img product-img" />
          <footer>
            <h5 class="product-name">${name}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`
    })
    .join('')
}
dispalyProducts()

// filter products by name using input value
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value
  products = allProducts.filter((product) => {
    return product.name.includes(inputValue)
  })
  dispalyProducts()
})

// dispaly (render) all category button in our page
const displayCategoryBtn = () => {
  const categoryBtn = [
    'all',
    ...new Set(allProducts.map((product) => product.category)),
  ]
  categoryBtnsContainer.innerHTML = categoryBtn
    .map((category) => {
      return `<button class="btn category-btn" data-type="${category}">
            ${category}
          </button>`
    })
    .join('')

  const allCatogeryBtn = categoryBtnsContainer.querySelectorAll('.category-btn')

  allCatogeryBtn.forEach((btn) => {
    allCatogeryBtn[0].classList.add('active')
    btn.addEventListener('click', (e) => {
      allCatogeryBtn.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')
    })
  })
}
displayCategoryBtn()

// filter products by category using button
categoryBtnsContainer.addEventListener('click', (e) => {
  const element = e.target
  if (element.classList.contains('category-btn')) {
    if (element.dataset.type === 'all') {
      products = [...allProducts]
    } else {
      products = allProducts.filter((product) => {
        return product.category === element.dataset.type
      })
    }
    searchInput.value = ''
    dispalyProducts()
  }
})
