const allProducts = [
  {
    id: 1,
    category: 'vegetables',
    img: './imgs/product-1.jpg',
    name: 'tomato',
    price: 29.35,
  },
  {
    id: 2,
    category: 'fruits',
    img: './imgs/product-2.jpg',
    name: 'pineapple',
    price: 23.75,
  },
  {
    id: 3,
    category: 'vegetables',
    img: './imgs/product-3.jpg',
    name: 'pepper',
    price: 14.45,
  },
  {
    id: 4,
    category: 'fruits',
    img: './imgs/product-4.jpg',
    name: 'strawberry',
    price: 25.65,
  },
  {
    id: 5,
    category: 'vegetables',
    img: './imgs/product-5.jpg',
    name: 'cucumber',
    price: 23.35,
  },
  {
    id: 6,
    category: 'vegetables',
    img: './imgs/product-6.jpg',
    name: 'tomato',
    price: 29.35,
  },
  {
    id: 7,
    category: 'vegetables',
    img: './imgs/product-7.jpg',
    name: 'potato',
    price: 30.75,
  },
  {
    id: 8,
    category: 'fruits',
    img: './imgs/product-8.jpg',
    name: 'banana',
    price: 25.75,
  },
]

/* 
// dispaly  products items by filtering
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value
  const filterProductsByName = products.filter((item) => {
    return item.name.includes(inputValue)
  })
  dispalyProductItems(filterProductsByName)
})

// display all btns filter
function dispalyBtnsFilter() {
  // all category type
  const allCategory = products.map((item) => {
    return item.category
  })
  // uniqe category type
  const uniqeCategory = ['all', ...new Set(allCategory)]
  const categories = uniqeCategory
    .map((item) => {
      return `<button class="btn category-btn" data-type="${item}">
            ${item}
          </button>`
    })
    .join('')
  categoryBtnsContainer.innerHTML = categories
}
dispalyBtnsFilter()

// dispaly all products items
function dispalyProductItems(items) {
  const allProducts = 
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
dispalyProductItems(products) */
