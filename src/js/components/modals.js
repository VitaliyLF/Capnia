import { disableScroll } from '../functions/disable-scroll'
import { enableScroll } from '../functions/enable-scroll'

const modals = document.querySelectorAll('.js-modal')
const openModals = document.querySelectorAll('.js-open-modal')
const closeModals = document.querySelectorAll('.js-close-modal')

const openModalHundler = (modal) => {
  modal.showModal()
  disableScroll()
}

const closeModalHundler = (modal) => {
  modal.close()
  enableScroll()
}

openModals.forEach((openModal, index) => {
  openModal.addEventListener('click', () => {
    openModalHundler(modals[index])
  })
})

closeModals.forEach((closeModal, index) => {
  closeModal.addEventListener('click', () => {
    closeModalHundler(modals[index])
  })
})

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    const dialogModal = e.currentTarget
    const isClickedOnBackDrop = e.target === dialogModal

    if (isClickedOnBackDrop) {
      closeModalHundler(dialogModal)
      enableScroll()
    }
  })
})
