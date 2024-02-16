import _vars from '../_vars'
import Swiper from 'swiper'
import { Pagination, A11y, Keyboard } from 'swiper/modules'

Swiper.use([Pagination, A11y, Keyboard])

const bodyStyle = window.getComputedStyle(document.body)
const gap = parseInt(bodyStyle.getPropertyValue('--offset-large'))

const bannerSwiper = new Swiper(_vars.heroSliderEl, {
  slidesPerView: 1,
  speed: 1500,
  spaceBetween: gap,
  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
})
