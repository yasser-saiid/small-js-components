const products = [
  {
    id: 1,
    category: 'vegetables',
    img: './imgs/product-1.jpg',
    name: 'tomato',
    prices: {
      daiscount: 19.25,
      price: 29.35,
    },
  },
  {
    id: 2,
    category: 'fruits',
    img: './imgs/product-2.jpg',
    name: 'pineapple',
    prices: {
      daiscount: 15.85,
      price: 23.75,
    },
  },
  {
    id: 3,
    category: 'vegetables',
    img: './imgs/product-3.jpg',
    name: 'pepper',
    prices: {
      daiscount: 12.25,
      price: 14.45,
    },
  },
  {
    id: 4,
    category: 'fruits',
    img: './imgs/product-4.jpg',
    name: 'strawberry',
    prices: {
      daiscount: 18.27,
      price: 25.65,
    },
  },
  {
    id: 5,
    category: 'vegetables',
    img: './imgs/product-5.jpg',
    name: 'cucumber',
    prices: {
      daiscount: 11.55,
      price: 23.35,
    },
  },
  {
    id: 6,
    category: 'vegetables',
    img: './imgs/product-6.jpg',
    name: 'tomato',
    prices: {
      daiscount: 19.25,
      price: 29.35,
    },
  },
  {
    id: 7,
    category: 'vegetables',
    img: './imgs/product-7.jpg',
    name: 'potato',
    prices: {
      daiscount: 18.95,
      price: 30.75,
    },
  },
  {
    id: 8,
    category: 'fruits',
    img: './imgs/product-8.jpg',
    name: 'banana',
    prices: {
      daiscount: 15.25,
      price: 25.75,
    },
  },
]

window.addEventListener('DOMContentLoaded', function () {
  renderCategoryBtns(products)
  renderMenuPrpducts(products)
  renderAboutImgs()
  FilterProducts()

  /* const filterBtn = btnContainer.querySelectorAll('.filter-btn')
  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      const category = evt.currentTarget.dataset.type
      const filterproducts = products.filter(function (item) {
        if (item.category === category) {
          return item
        }
      })
      if (category === 'fresh') {
        renderMenuPrpducts(products)
      } else {
        renderMenuPrpducts(filterproducts)
      }
    })
  }) */
})

const ourMenu = document.querySelector('.our-menu')
const btnContainer = document.querySelector('.btn-container')
// display filter btn
function renderCategoryBtns(productcategory) {
  // all category
  const allCategory = productcategory.map(function (categoryItem) {
    return categoryItem.category
  })
  // uniqe category
  const uniqeCategory = allCategory.reduce(
    function (accumulater, currntItem) {
      if (!accumulater.includes(currntItem)) {
        accumulater.unshift(currntItem)
      }
      return accumulater
    },
    ['fresh']
  )
  // uniqe category using ES6
  //const uniqeCategory = [...new Set(allCategory), 'fresh']
  // render all category buttons
  const renderCategoryBtn = uniqeCategory
    .map(function (categoryItem) {
      return `<button type="button" class="btn filter-btn" data-type=${categoryItem}>
            ${categoryItem}
          </button>`
    })
    .join(' ')
  btnContainer.innerHTML = renderCategoryBtn
  // toggle class active on btns
  const allCategoryBtn = btnContainer.querySelectorAll('.filter-btn')
  allCategoryBtn.forEach(function (btn) {
    btnContainer.lastElementChild.classList.add('active')
    btn.addEventListener('click', function (evt) {
      allCategoryBtn.forEach(function (btn) {
        btn.classList.remove('active')
      })
      evt.currentTarget.classList.add('active')
    })
  })
}

// filter btn function
function FilterProducts() {
  const filterBtn = btnContainer.querySelectorAll('.filter-btn')
  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      const category = evt.currentTarget.dataset.type
      const filterproducts = products.filter(function (item) {
        if (item.category === category) {
          return item
        }
      })
      if (category === 'fresh') {
        renderMenuPrpducts(products)
      } else {
        renderMenuPrpducts(filterproducts)
      }
    })
  })
}

// display all menu item
function renderMenuPrpducts(allProducts) {
  const menuProducts = allProducts
    .map(function (item) {
      const {
        name,
        img,
        prices: { daiscount, price },
      } = item
      return `<article class="menu-item">
          <div class="item-img">
            <span>new</span>
            <img src=${img} alt=${name} class="img" />
          </div>
          <div class="item-info">
            <h4>${name}</h4>
            <div>
              <span class="discount">$${daiscount}</span>
              <span class="price">$${price}</span>
            </div>
          </div>
          <div class="item-options">
            <button type="button" class="btn">
              <i class="fa fa-eye"></i>
              View detail
            </button>
            <button type="button" class="btn">
              <i class="fa fa-shopping-bag"></i>
              Add to cart
            </button>
          </div>
        </article>`
    })
    .join('')

  ourMenu.innerHTML = menuProducts
}

// display about img
function renderAboutImgs() {
  const aboutImgs = document.querySelector('.products-slider')
  const imgItem = products
    .map(function (item) {
      return `<img
              src=${item.img}
              alt="product-img"
              class="img slid-img"
            />`
    })
    .join('')
  aboutImgs.innerHTML = imgItem
}
