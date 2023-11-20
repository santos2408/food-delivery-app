export const loginSwiperParams = {
  injectStyles: [
    `
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    color: #fff;
    background: #fff;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }
  `,
  ],
  autoplay: {
    delay: 10000,
  },
  loop: true,
  allowTouchMove: false,
  pagination: {
    clickable: false,
  },
};

export const dealsSwiperParams = {
  slidesPerView: 1.2,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },

  breakpoints: {
    420: {
      slidesPerView: 1.6,
    },
    620: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      centeredSlides: false,
      loop: false,
    },
  },
};
