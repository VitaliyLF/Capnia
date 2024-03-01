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
const isMobileViewPort = () => window.innerWidth < 1370

Swiper.use([Pagination, Navigation, A11y, Keyboard, Autoplay, EffectFade])

const pageHeroSlider = new Swiper('.page-hero__swiper', {
  slidesPerView: 'auto',
  simulateTouch: false,
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
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
    init: function () {
      updatePaginationHeight.call(this)
    },
    slideChange: function () {
      updatePaginationHeight.call(this)
    },
  },
})

let resizeInterval

function startResizeListener() {
  if (!resizeInterval) {
    resizeInterval = setInterval(function () {
      updatePaginationHeight.call(pageHeroSlider)
    }, 10)
  }
}

window.addEventListener('resize', startResizeListener)
window.addEventListener('orientationchange', startResizeListener)

function updatePaginationHeight() {
  if (isMobileViewPort()) {
    const activeSlide = this.slides[this.activeIndex]

    if (activeSlide) {
      const pageHeroTitleHeight = activeSlide.querySelector('.page-hero__title')
      const pageHeroImage = activeSlide.querySelector('.page-hero__images')
      const pageHeroPagination = document.querySelector(
        '.page-hero__swiper-pagination'
      )

      if (pageHeroTitleHeight && pageHeroImage) {
        const pageHeroHeightTop =
          pageHeroTitleHeight.clientHeight + pageHeroImage.clientHeight

        pageHeroPagination.style.setProperty(
          '--page-hero-inner-height',
          pageHeroHeightTop + 'px'
        )
      }
    }
  }
}

window.addEventListener('resize', function () {
  updatePaginationHeight.call(pageHeroSlider)
})

window.addEventListener('orientationchange', function () {
  updatePaginationHeight.call(pageHeroSlider)
})

new Swiper('.jaundice__swiper', {
  slidesPerView: 1,
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
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
      allowTouchMove: true,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: gapHuge,
      simulateTouch: true,
      allowTouchMove: false,
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
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex)
      })
    }
  }

  resizableSwiper('(max-width: 1370px)', '.consultants__swiper', {
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
        simulateTouch: true,
      },
    },
  })
})

new Swiper('.hemolytic-status__swiper', {
  speed: 500,
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
      slidesPerView: 1.3,
      spaceBetween: gapMedium,
    },
    576: {
      slidesPerView: 1.4,
      spaceBetween: gapMedium,
    },
    1024: {
      slidesPerView: 1.5,
      navigation: false,
      spaceBetween: gapMedium,
    },
    1370: {
      slidesPerView: 1,
      spaceBetween: 0,
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
