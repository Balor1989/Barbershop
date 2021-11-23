import './sass/main.scss';
import "@fontsource/raleway";
import "@fontsource/open-sans";
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

new Swiper('.swiper',{
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
    delay: 4000,
 },
});

