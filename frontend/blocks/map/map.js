import Module from '../../includes/Module';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.min';

export default class Map extends Module {

    constructor() {
        super({
            name: 'Map',
            self: '.js-map'
        });
    }

    init() {

        this.$carosuel = $('.js-map-carousel', this.$root);
        this.initCarousel();
    }

    initCarousel() {
        this.$slider = new Swiper( this.$carosuel, {
            slidesPerView: 4,
            spaceBetween: 12,
            loop: true,
            paginationClickable: true,
            nextButton: '.js-carousel-next',
            prevButton: '.js-carousel-prev'
        });
    }

    initSlider() {

    }
}