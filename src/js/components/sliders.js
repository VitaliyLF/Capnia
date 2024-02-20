import _vars from '../_vars'
import Swiper from 'swiper'
import {
  Pagination,
  A11y,
  Keyboard,
  Autoplay,
  EffectFade,
} from 'swiper/modules'

const bodyStyle = window.getComputedStyle(document.body)
const gap = parseInt(bodyStyle.getPropertyValue('--offset-large'))

Swiper.use([Pagination, A11y, Keyboard, Autoplay, EffectFade])

const bannerSwiper = new Swiper(_vars.heroSliderEl, {
  modules: [Pagination, A11y, Keyboard, Autoplay, EffectFade],
  slidesPerView: 'auto',
  speed: 500,
  simulateTouch: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
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
  on: {
    slideChange: function () {},
  },
})

const jaundiceSwiper = new Swiper(_vars.jaundiceSliderEl, {
  slidesPerView: 1,
  speed: 500,
  simulateTouch: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.jaundice__swiper-pagination',
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

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 2561px)', '.jaundice-treatment__swiper', {
    slidesPerView: 2,
    spaceBetween: 132,
    speed: 500,
    simulateTouch: false,
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
    breakpoints: {
      1440: {
        slidesPerView: 1.1,
        spaceBetween: 32,
      },
    },
  })
})
