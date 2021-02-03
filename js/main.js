const flowersSlider = new Swiper('.flowers-slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 6,
  
    // подключение стрелок
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // параметры слайдера
  loop: true,
  slidesPerView: 1,

  // подключение стрелок
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});