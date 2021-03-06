// const someSwiper = new Swiper('.swiper', {
/*

navigation: {
  nextEl: ".nextNavButton", prevEl: ".prevNavButton",
},
pagination: { 
  el: '.swiperPagination', 
  clickable: true, 
},

preloadImages: true,
lazy: {
  loadOnTransitionStart: false,
  loadPrevnext: true,
},

autoplay:{
  delay: 3000,
  stopOnLastSlide: false,
},

Infinite scrolling.
  loop: false,

Changes the slider settings based on the width of the screen.
  breakpoints: {
    when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

Changes the height of the slider in runtime depending on the height of the slides.
  autoHeight: true,
  slidesPerView: 1,

If there are no more than one slides, the slider stops working.
  watchOverflow: true,
  direction: 'horizontal' or 'vertical',

Indent between slides.
  spaceBetween: 150,

Enable parallax effect.
  parallax: true,
For working add and set attributes on elements in slide:
  data-swiper-parallax="0" (xRight)
  data-swiper-parallax-duration="1000" (in ms)

effect: 'fade',
fadeEffect: {
    crossFade: true,
},
*/
// });

const mainSwiperDemos = new Swiper('.main-slider__demos', {
  spaceBetween: 15,
  watchOverflow: true,

  breakpoints: {
    768: {
      slidesPerView: 6,
    },
    426: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

const mainSwiper = new Swiper('.main-slider', {
  navigation: {
    nextEl: ".slider-next-btn", prevEl: ".slider-prev-btn",
    disabledClass: 'unactive',
  },
  spaceBetween: 1,
  grabCursor: true,
  watchOverflow: true,

  thumbs: {
    swiper: mainSwiperDemos,
    slideThumbActiveClass: 'active',
  },
});
let blogSwiper = new Swiper('.main-content__slider', {
  navigation: {
    nextEl: ".slider-next-btn", prevEl: ".slider-prev-btn",
    disabledClass: 'unactive',
  },
  spaceBetween: 1,
  grabCursor: true,
  watchOverflow: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: '.slider-pagination',
  },
});