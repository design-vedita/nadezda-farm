import Module from '../../includes/Module';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.min';

// Слайдер на главной под шапкой
export default class SliderIndex extends Module {

    constructor(){
        super({
            name: 'SliderIndex',
            self: '.js-slider'
        });
    }

    init() {
        this.initSlider();
    }

    initSlider() {
        this.$slider = new Swiper(this.$root, {
            paginationClickable: true,
            loop: true,
            slidesPerView: 1,
          //  autoplay: 2500,
           // autoplayDisableOnInteraction: false,
            nextButton: '.js-slider-next',
            prevButton: '.js-slider-prev'
        });
    }
}