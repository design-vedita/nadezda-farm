import Module from '../../includes/Module';
import App from '../../includes/App';
import $ from 'jquery';
require('jquery-ui');
require('ui-swipe');
require('ui-slider');

// Левый фильтр
export default class Filter extends Module {

    constructor() {
        super({
            name: 'Header',
            self: '.js-left-filter'
        });
    }

    init() {
        // переменные для слайдеров
        this.$from = $('.js-left-filter-from', this.$root);
        this.$to = $('.js-left-filter-to', this.$root);
        this.$slider_age = $('.js-left-filter-age', this.$root);
        this.$slider_price = $('.js-left-filter-price', this.$root);

        // переменные для открытия параметров
        this.$title = $('.js-left-filter-category-title', this.$root);

        this.$title.on('click', $.proxy(this.openParams, this));
        this.initSliderAge();
        this.initSliderPrice();

        //переменная заголовка
        this.$filter_title = $('.js-left-filter-title', this.$root);
        App.win.on('resize', $.proxy(this.getClientWidth, this));
        this.$filter_title.on('click', $.proxy(this.openFilter, this));

    }

    // Клик по заголовку открытие
    openParams(e) {
        let $target = $(e.currentTarget);
        let $parent = $target.parent();

        $target.toggleClass('left-filter__category-title--click');
        $parent
            .find('.js-left-filter-hide')
            .toggleClass('left-filter__hide--show');
    }

    // Cлайдер по возрасту
    initSliderAge() {

        this.$min = $('.js-left-filter-from-age').attr('data-min');
        this.$max = $('.js-left-filter-to-age').attr('data-max');

        this.$value_min = $('.js-left-filter-from-age').attr('data-value-min');
        this.$value_max = $('.js-left-filter-to-age').attr('data-value-max');

        this.$slider_age.slider({
            range: true,
            min: +this.$min,
            max: +this.$max,
            values: [ +this.$value_min, +this.$value_max ],
            slide: function( event, ui ) {
                $('.js-left-filter-from-age').val(ui.values[ 0 ]);
                $('.js-left-filter-to-age').val(ui.values[ 1 ]);
            }
        });

        $('.js-left-filter-from-age').val($( ".js-left-filter-age" ).slider( "values", 0 ));

        $('.js-left-filter-to-age').val($( ".js-left-filter-age" ).slider( "values", 1 ));
    }

    // Слайдер по ценам
    initSliderPrice() {

        this.$min = $('.js-left-filter-from-price').attr('data-min');
        this.$max = $('.js-left-filter-to-price').attr('data-max');

        this.$value_min = $('.js-left-filter-from-price').attr('data-value-min');
        this.$value_max = $('.js-left-filter-to-price').attr('data-value-max');

        this.$slider_price.slider({
            range: true,
            min: +this.$min,
            max: +this.$max,
            values: [ +this.$value_min, +this.$value_max ],
            slide: function( event, ui ) {
                $('.js-left-filter-from-price').val(ui.values[ 0 ]);
                $('.js-left-filter-to-price').val(ui.values[ 1 ]);
            }
        });


        $('.js-left-filter-from-price').val($( ".js-left-filter-price" ).slider( "values", 0 ));

        $('.js-left-filter-to-price').val($( ".js-left-filter-price" ).slider( "values", 1 ));
    }

    getClientWidth() {
        let clientWidth = document.documentElement.clientWidth;

        return clientWidth;
    }

    // На мобильных прячем, показываем фильтр
    openFilter(e) {

        if (this.getClientWidth() < 1200) {

            let target = e.currentTarget;

            $(target)
                .toggleClass('left-filter__title--open')
                .parent()
                .find('form')
                .toggleClass('form--open');

        }
    }
}