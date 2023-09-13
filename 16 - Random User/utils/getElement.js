export const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(`no element matches ${selector}`)
}
export const getAllElements = (selector) => {
  const element = [...document.querySelectorAll(selector)]
  if (element) return element
  throw new Error(`no element matches ${selector}`)
}
