const newsSwiper = new Swiper ('.swiper-container', {
    
    slidesPerView: 3,

    breakpoints: {
    // when window width is <= 320px
    	500: {
      	slidesPerView: 1,
      	spaceBetween: 10
    	},
    // when window width is <= 480px
    	768: {
      	slidesPerView: 2,
      	spaceBetween: 20
    	}
    // when window width is <= 640px
    	
  	},
    
    
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,

    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });

