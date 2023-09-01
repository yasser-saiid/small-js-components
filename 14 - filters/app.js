import { products } from './data.js'

// get element function

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
const btnContainer = getElement('.btn-container')
const productsContainer = getElement('.products-center')

// dispaly (render) all products in our page
function dispalyProducts(products) {
  const allProducts = products
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
  productsContainer.innerHTML = allProducts
}
dispalyProducts(products)

// dispaly (render) all buttons category in our page
function displayCategoryBtn(products) {
  const uniqeCategory = [
    'all',
    ...new Set(products.map((product) => product.category)),
  ]
  const categoryBtn = uniqeCategory
    .map((category) => {
      return `<button class="btn category-btn" data-type="${category}">
            ${category}
          </button>`
    })
    .join('')
  btnContainer.innerHTML = categoryBtn
  // add class active
  const allCategoryBtn = btnContainer.querySelectorAll('.category-btn')
  allCategoryBtn[0].classList.add('active')
  allCategoryBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      allCategoryBtn.forEach((btn) => btn.classList.remove('active'))
      e.target.classList.add('active')
    })
  })
}
displayCategoryBtn(products)

// filter products by product category type
function filtterProducts() {
  const categoryBtn = btnContainer.querySelectorAll('.category-btn')
  categoryBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.target.dataset.type
      const filteredProducts = products.filter((product) => {
        return product.category === category
      })

      if (category === 'all') {
        dispalyProducts(products)
      } else {
        dispalyProducts(filteredProducts)
      }
    })
  })
}
filtterProducts()

// filter products by product name
form.addEventListener('keyup', filterProductsByName)
function filterProductsByName() {
  const searchInput = getElement('.search-input')
  const inputValue = searchInput.value
  const filteredProductsByName = products.filter((product) => {
    return product.name.includes(inputValue)
  })

  if (filteredProductsByName.length < 1) {
    productsContainer.innerHTML = `<h5>sorry, no products matched your search</h5>`
  } else {
    dispalyProducts(filteredProductsByName)
  }
}
