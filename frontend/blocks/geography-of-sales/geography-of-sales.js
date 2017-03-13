import Module from '../../includes/Module';
import $ from 'jquery';

// Георгафия продаж
export default class GeographyOfSales extends Module {

    constructor() {
        super({
            name: 'Geography-of-sales',
            self: '.js-geography-of-sales'
        });
    }

    init() {

        this.$links = $('.js-link-region', this.$root);
        this.$sections = $('.js-geography-section', this.$root);

        this.$links.on('click', $.proxy(this.openSection, this));
    }

    // Открытие списков аптек по клику на область
    openSection(e) {

        let target = e.currentTarget;

            $('.' + target.className).each(function(){
                $(this)
                    .parent()
                    .removeClass('left-menu--active');
            });

            $(target)
                .parent()
                .addClass('left-menu--active');

        let $region = $(target).attr('data-region');

        this.$sections.each(function() {
            $(this).removeClass('geography-of-sales--visible');

            if ($(this).attr('data-region') == $region) {
                $(this).addClass('geography-of-sales--visible');
            }
        });
    }
}