document.addEventListener('DOMContentLoaded', () => {
  let currentBtn, drop

  const menuBtn = document.querySelector('.js-btn-dropdown')

  const closeDropdown = () => {
    if (currentBtn && drop) {
      currentBtn.classList.remove('header__nav-item--active')
      drop.classList.remove('dropdown--active')
    }
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    currentBtn = e.currentTarget
    drop = currentBtn.closest('.header__nav-item').querySelector('.dropdown')

    currentBtn.classList.toggle('header__nav-item--active')
    drop.classList.toggle('dropdown--active')
  })

  document.addEventListener('click', closeDropdown)
})
