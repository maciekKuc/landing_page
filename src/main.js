const newsSwiper = new Swiper ('.swiper-container', {
    
    slidesPerView: 1,
    slidesPerColumn: 2,
    
    
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,

    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });

const trendingSwiper = new Swiper ('.trending__swiper', {
    
    slidesPerView: 1,  
    
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,

    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });