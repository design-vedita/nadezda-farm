import $ from 'jquery';
import Module from '../../includes/Module';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.min';

// Пожожие товары
export default class Similar extends Module {

    constructor() {
        super({
            name: 'Similar',
            self: '.js-similar'
        });
    }

    init() {
        this.$carousel = $('.js-similar-carousel', this.$root);
        this.initSimilarCarousel();
    }
    // Карусель инициализация
    initSimilarCarousel() {
        this.$gallery = new Swiper(this.$carousel, {
            //spaceBetween: 2,
            slidesPerView: 4,
            nextButton: '.js-similar-carousel-next',
            prevButton: '.js-similar-carousel-prev',
            breakpoints: {
                1190: {
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 2
                },
                460: {
                    slidesPerView: 1
                }
            }
        });
    }
}