export const disableScroll = () => {
  const paddingOffset = window.innerWidth - document.documentElement.clientWidth
  document.body.classList.add('scroll-lock')
  document.body.style.paddingRight = `${paddingOffset}px`
  document.body.style.scrollBehavior = 'unset'
}
