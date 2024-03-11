export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block')
  const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`

  document.documentElement.style.scrollBehavior = 'none'
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset
  })
  document.body.style.paddingRight = paddingOffset
  document.body.classList.add('scroll-lock')
}
