import Swiper from "swiper";

// слайдер под хэдером
new Swiper('.banner__main', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 7000,
  },

  navigation: {
    nextEl: '.swiper-body__main .swiper-body__btn-next',
    prevEl: '.swiper-body__main .swiper-body__btn-prev',
  },
});

// слайдер товаров Актуальные предложения
new Swiper('.products__slider-actual', {
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: true,

  breakpoints: {
    220: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '.swiper-body__actual .swiper-body__btn-next',
    prevEl: '.swiper-body__actual .swiper-body__btn-prev',
  },
});

// слайдер на главной странице
new Swiper('.banner__second', {
  slidesPerView: 1,
  loop: true,


  navigation: {
    nextEl: '.swiper-body__second .swiper-body__btn-next',
    prevEl: '.swiper-body__second .swiper-body__btn-prev',
  },
});

// слайдер товаров Новинки
new Swiper('.products__slider-new', {
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: true,

  breakpoints: {
    220: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '.swiper-body__new .swiper-body__btn-next',
    prevEl: '.swiper-body__new .swiper-body__btn-prev',
  },
});

// слайдер на странице товары
new Swiper('.goods__swiper', {
  slidesPerView: 1,
  loop: true,
  thumbs: {
    swiper: {
      el: ".goods__mini-swiper",
      slidesPerView: 5,
    }
  }


});

