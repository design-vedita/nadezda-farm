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

        if (this.$carosuel.length > 0) {

            let $gallery = new Swiper(this.$slider, {
                slidesPerView: 1
            });

            let $thumbs = new Swiper( this.$carosuel, {
                spaceBetween: 12,
                //centeredSlides: true,
                slidesPerView: 4,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                nextButton: '.js-carousel-next',
                prevButton: '.js-carousel-prev',
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                    }
                }
            });

            // Ручное управление слайдами
            $thumbs.slides.on('click', function(){
                // Переходим к нужному в верхнем слайдере
                $gallery.slideTo($thumbs.clickedIndex);

                // Очищаем активный класс
                $($thumbs.container).each(function(){
                    $(this).find('.map__image-thumb').removeClass('swiper-slide-active');
                });
                // Ставим активный класс текущему превью
                $($thumbs.clickedSlide).addClass('swiper-slide-active');
            });

            $thumbs.nextButton.on('click', function(){
                $gallery.slideNext();
                $thumbs.slideNext();
            });

            $thumbs.prevButton.on('click', function(){
                $gallery.slidePrev();
                $thumbs.slidePrev();
            });

            $gallery.params.control = $thumbs;
        }


        /*$thumbs.params.control = this.$gallery;*/

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