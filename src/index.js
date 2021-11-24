import './sass/main.scss';
import "@fontsource/raleway";
import "@fontsource/open-sans";
import Swiper, {Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { addBackToTop } from 'vanilla-back-to-top'

// Swiper settings
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
new Swiper('.swiper', {
  direction:'vertical',
  speed: 700,
  effect: 'fade',
    fadeEffect: {
      crossFade: true, 
  },
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    autoplay: {
    pauseOnMouseEnter:true,
    disableOnInteraction: false,
    delay: 3000,
 },
});


// Back-to-top button
addBackToTop({
  backgroundColor: 'transparent',
  diameter: 50,
  innerHTML:'<svg id="circle-up" viewBox="0 0 32 32"><path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"></path><path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path></svg>',
  textColor: '$primary-text-color',
  scrollDuration: 700,
  showWhenScrollTopIs: 400,
  cornerOffset: 30,
})
