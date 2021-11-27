'use strict'

let doc = document;
let innerWindowWidth = () => window.innerWidth;
let innerWindowHeight = () => window.innerHeight;


// ? If you see an error here, it's normal.
function showOrHideFullscreenNav(e) {
  let sbWidth = innerWindowWidth() - doc.querySelector('html').clientWidth;

  if (fsNavmenu !== undefined) {
    burger.classList.toggle('active');

    body.classList.toggle('fixed');
    body.style.paddingRight = sbWidth + 'px';

    header.classList.toggle('fixed-header');
    header.style.paddingRight = sbWidth + 'px';

    fsNavmenu.classList.toggle('active');
    fsMenuIsActive = !fsMenuIsActive;
  }
}
let header = doc.querySelector('header');
let body = doc.querySelector('body');

const burger = doc.getElementById('burgerButton');
const fsNavmenu = doc.querySelector('.fullscreen-navmenu');
burger.addEventListener('click', showOrHideFullscreenNav);

let fsMenuIsActive = false;;
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
  }
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
    nextEl: ".main-slider__next-btn", prevEl: ".main-slider__prev-btn",
    disabledClass: 'unactive',
  },
  spaceBetween: 1,
  grabCursor: true,
  watchOverflow: true,

  thumbs: {
    swiper: mainSwiperDemos,
    slideThumbActiveClass: 'active',
  },
});;


function toggleSidebar(e) {
  sidebar.classList.toggle('active');
  toggleSidebarBtn.classList.toggle('active');
}
const toggleSidebarBtn = document.getElementById('sidebar-toggle-btn');
const sidebar = document.querySelector('.sidebar');

toggleSidebarBtn.addEventListener('click', toggleSidebar);