export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block')
  const body = document.body
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px'
  })
  body.style.paddingRight = '0px'

  body.style.top = ''
  body.classList.remove('scroll-lock')
  document.documentElement.style.scrollBehavior = 'smooth'
}
