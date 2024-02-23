import Swiper from 'swiper'
import {
  Pagination,
  Navigation,
  A11y,
  Keyboard,
  Autoplay,
  EffectFade,
} from 'swiper/modules'

const bodyStyle = window.getComputedStyle(document.body)
const gapHuge = parseInt(bodyStyle.getPropertyValue('--offset-huge'))
const gapLarge = parseInt(bodyStyle.getPropertyValue('--offset-large'))
const gapMedium = parseInt(bodyStyle.getPropertyValue('--offset-medium'))

Swiper.use([Pagination, Navigation, A11y, Keyboard, Autoplay, EffectFade])

new Swiper('.page-hero__swiper', {
  modules: [Pagination, Navigation, A11y, Keyboard, Autoplay, EffectFade],
  slidesPerView: 'auto',
  speed: 500,
  simulateTouch: false,
  autoHeight: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.page-hero__swiper-pagination',
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
    slideChange: function () {
      const activeSlideIndexHeroSlider = this.activeIndex
      const heroSlides = this.slides

      heroSlides.forEach((slide, index) => {
        const decorImage = slide.querySelector('.page-hero__decor')

        if (index === activeSlideIndexHeroSlider) {
          decorImage.style.transform = 'rotate(15deg)'
        } else {
          decorImage.style.transform = ''
        }
      })
    },
  },
})

new Swiper('.jaundice__swiper', {
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

new Swiper('.jaundice-treatment__swiper', {
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
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: gapMedium,
    },
    576: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: gapLarge,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: gapHuge,
    },
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
      }

      swiper && swiper.destroy(true, true)
      return
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 1370px)', '.consultants__swiper', {
    speed: 500,
    slidesPerGroup: 1,
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
      320: {
        slidesPerView: 1.2,
        spaceBetween: gapMedium,
      },
      576: {
        slidesPerView: 1.2,
        spaceBetween: gapMedium,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: gapMedium,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: gapLarge,
      },
    },
  })
})

new Swiper('.hemolytic-status__swiper', {
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.hemolytic-status__next',
    prevEl: '.hemolytic-status__prev',
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
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: gapMedium,
    },
    576: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: gapLarge,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: gapHuge,
    },
  },
  on: {
    init: function () {
      const prevButton = document.querySelector('.hemolytic-status__prev')
      prevButton.style.opacity = '0'
      prevButton.style.visibility = 'hidden'
    },
    slideChange: function () {
      const activeSlideIndexHemolyticSlider = this.activeIndex
      const prevButton = document.querySelector('.hemolytic-status__prev')

      if (activeSlideIndexHemolyticSlider !== 0) {
        prevButton.style.opacity = '1'
        prevButton.style.visibility = 'visible'
      } else {
        prevButton.style.opacity = '0'
        prevButton.style.visibility = 'hidden'
      }
    },
  },
})
