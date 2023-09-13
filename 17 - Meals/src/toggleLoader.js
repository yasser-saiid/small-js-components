import getElement from './getElement.js'

const loader = getElement('.loading')

export const showLoader = () => {
  loader.classList.remove('hide-loading')
}
export const hideLoader = () => {
  loader.classList.add('hide-loading')
}
