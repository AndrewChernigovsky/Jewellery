const swiper = new Swiper('.swiper-main', {
    speed: 400,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-main__pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-main__button-next',
      prevEl: '.swiper-main__button-prev',
    },
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
    }

});
