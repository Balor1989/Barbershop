import './sass/main.scss';
import "@fontsource/raleway";
import "@fontsource/open-sans";
import Swiper, {Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { addBackToTop } from 'vanilla-back-to-top';
import SweetScroll from 'sweet-scroll';



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


// Back-to-top button settings
addBackToTop({
  backgroundColor: 'transparent',
  diameter: 50,
  innerHTML: '<svg id="arrow-up2" viewBox="0 0 32 32"><path d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"></path></svg>',
  textColor: '$primary-text-color',
  scrollDuration: 700,
  showWhenScrollTopIs: 400,
  cornerOffset: 30,
});

// Smooth-scroll settings
const onSmoothScroll = () => {
  const scroller = new SweetScroll({
    easing: 'easeOutQuad'
  });
};
document.addEventListener(
  'DOMContentLoaded',onSmoothScroll,
  false,
);