import Module from '../../includes/Module';
import $ from 'jquery';
require('jquery-ui');
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
        this.$slider_age.slider({
            range: true,
            min: 0,
            max: 80,
            values: [ 3, 20 ],
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
        this.$slider_price.slider({
            range: true,
            min: 250,
            max: 5800,
            values: [ 250, 1400 ],
            slide: function( event, ui ) {
                $('.js-left-filter-from-price').val(ui.values[ 0 ]);
                $('.js-left-filter-to-price').val(ui.values[ 1 ]);
            }
        });

        $('.js-left-filter-from-price').val($( ".js-left-filter-price" ).slider( "values", 0 ));

        $('.js-left-filter-to-price').val($( ".js-left-filter-price" ).slider( "values", 1 ));
    }
}