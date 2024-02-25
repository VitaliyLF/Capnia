const toTop = document.querySelector('.clinical-resources-info__to-top')
let clinicalResources

const clinicalResourcesElement = document.querySelector('.clinical-resources')
if (clinicalResourcesElement) {
  clinicalResources = clinicalResourcesElement.offsetHeight
}

const isVisibleToTop = (y = 0) => {
  if (toTop && clinicalResources && y >= clinicalResources) {
    toTop.classList.add('clinical-resources-info__to-top--active')
  } else if (toTop) {
    toTop.classList.remove('clinical-resources-info__to-top--active')
  }
}

isVisibleToTop(window.scrollY)

window.addEventListener('scroll', () => {
  let y = window.scrollY

  isVisibleToTop(y)
})
