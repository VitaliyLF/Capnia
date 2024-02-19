document.addEventListener('DOMContentLoaded', () => {
  let currentBtn, drop

  const menuBtn = document.querySelector('.js-btn-dropdown')
  menuBtn.addEventListener('click', (e) => {
    currentBtn = e.currentTarget
    drop = currentBtn.closest('.header__nav-item').querySelector('.dropdown')

    currentBtn.classList.toggle('header__nav-item--active')
    drop.classList.toggle('dropdown--active')
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__nav-list')) {
      currentBtn.classList.remove('header__nav-item--active')
      drop.classList.remove('dropdown--active')
    }
  })
})
