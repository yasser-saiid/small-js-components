function getElement(selector) {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(`no element matches your selector ${selector}`)
}

export default getElement
