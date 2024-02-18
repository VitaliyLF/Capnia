import vars from '../_vars'

export const enableScroll = () => {
  vars.bodyEl.classList.remove('scroll-lock')
  vars.bodyEl.style.paddingRight = '0'
  vars.bodyEl.style.scrollBehavior = 'auto'
}
