const swiper = new Swiper('.swiper-main', {
    speed: 400,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: '.swiper-main__pagination',
      clickable: true,
      dynamicBullets: false,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: '.swiper-main__button-next',
      prevEl: '.swiper-main__button-prev',
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      sensitivity:1,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1360: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
  }
});