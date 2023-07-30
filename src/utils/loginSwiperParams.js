export default {
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
    delay: 3000,
  },
  loop: true,
  allowTouchMove: false,
  pagination: {
    clickable: false,
  },
};
