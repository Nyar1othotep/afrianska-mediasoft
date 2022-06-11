import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
    },
    speed: 800,
    breakpoints: {
        644: {
            slidesPerView: 2,
        }
    },
});