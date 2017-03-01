import Module from '../../includes/Module';
import App from '../../includes/App';


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
        this.$slider_block = $('.js-left-filter-slider', this.$root);

        // переменные для открытия параметров
        this.$title = $('.js-left-filter-category-title', this.$root);

        this.$title.on('click', $.proxy(this.openParams, this));
       // this.initSlider();
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

    initSlider() {
        this.$slider_block.slider({

        });
    }

}