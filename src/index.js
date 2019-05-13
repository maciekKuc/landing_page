import Swiper from 'swiper';

const newsSwiper = new Swiper ('.swiper-container', {
    
    slidesPerView: 3,

    breakpoints: {
    // when window width is <= 320px
    	500: {
      	slidesPerView: 1,
      	spaceBetween: 10
    	},
    // when window width is <= 480px
    	1200: {
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

const menuButton = document.querySelector('.navbar__menu');
const footer = document.querySelector('.footer');

menuButton.addEventListener('click', () =>{
  menuButton.classList.toggle('visible');
  footer.classList.toggle('footer__mobile');
});

