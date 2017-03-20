import $ from 'jquery';
import Module from '../../includes/Module';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.min';

// Карточка товаров
export default class Map extends Module {

    constructor() {
        super({
            name: 'Map',
            self: '.js-map'
        });
    }

    init() {
        this.$slider = $('.js-map-slider', this.$root);
        this.$carosuel = $('.js-map-thumbs', this.$root);
        this.initCarousel();

        this.$titles = $('.js-map-ico', this.$root);
        this.$titles.on('click', $.proxy(this.openCategoryDescription, this));

        this.$tabs_link = $('.js-map-tabs-link', this.$root);
        this.$tabs = $('.js-map-tab',  this.$root);
        this.$tabs_link.on('click', $.proxy(this.openTab, this));
    }

    // Карусель инициализация
    initCarousel() {
        this.$gallery = new Swiper(this.$slider, {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1
        });

        this.$thumbs = new Swiper( this.$carosuel, {
            slidesPerView: 4,
            spaceBetween: 12,
            loop: true,
            touchRatio: 0.2,
            centeredSlides: false,
            slideToClickedSlide: true,
            nextButton: '.js-carousel-next',
            prevButton: '.js-carousel-prev',
            breakpoints: {
                767: {
                    slidesPerView: 3,
                }
            }
        });

        this.$gallery.params.control = this.$thumbs;
        this.$thumbs.params.control = this.$gallery;


        if (this.getClientWidth() > 768 && this.getClientWidth() < 1199) {
           // this.$thumbs.updateContainerSize();
        }
    }

    // Открытие разделов в описании
    openCategoryDescription(e) {
        let target = e.currentTarget;
            $(target).toggleClass('map__characteristics-ico--click');

        let $parent = $(target).parent();
            $parent
                .find('.js-map-characteristics-text')
                .toggleClass('map__characteristics-text--visible');
    }
    // Открытие табов
    openTab(e) {

        this.$tabs_link.each(function(){
            $(this).removeClass('map__tabs-links--active');
        });

        let target = e.currentTarget;
            $(target).addClass('map__tabs-links--active');

        let $type_tab = $(target).attr('data-tab');

        this.$tabs.each(function(){

            $(this).removeClass('map__tabs-description--active');

            if ($(this).attr('data-tab') == $type_tab) {
                $(this).addClass('map__tabs-description--active');
            }
        });
    }

    getClientWidth() {
        let clientWidth = document.documentElement.clientWidth;

        return clientWidth;
    }

}