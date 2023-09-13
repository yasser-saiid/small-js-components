const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(`no element matches ${selector}`)
}

export default getElement
