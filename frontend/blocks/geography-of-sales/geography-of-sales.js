import Module from '../../includes/Module';
import App from '../../includes/App';
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

        //this.$links.on('click', $.proxy(this.openSection, this));

        this.$geo_title = $('.js-geography-of-sales__left-menu .left-menu__title', this.$root);
        this.$geo_list = $('.js-geography-of-sales__left-menu .left-menu__list', this.$root);

        App.doc.on('resize', $.proxy(this.getClient, this));
        this.$geo_title.on('click', $.proxy(this.openList, this));
    }

    // Открытие списка аптек
    openList() {

        if (this.getClient() < 768) {
            this.$geo_list.toggle();
        }
    }

    // Открытие списков аптек по клику на область
    // Т.к. используется перезагрузка, закомментил
    /*openSection(e) {

        let target = e.currentTarget;

            $('.' + target.className).each(function(){
                $(this)
                    .parent()
                    .removeClass('left-menu--active');
            });

            $(target)
                .parent()
                .addClass('left-menu--active');

        // На мобильных по клику прячем список, чтобы сразу видеть изменения
        if (this.getClient() < 768) {
            $(target)
                .parents('.left-menu__list')
                .toggle();
        }

        let $region = $(target).attr('data-region');

        this.$sections.each(function() {
            $(this).removeClass('geography-of-sales--visible');

            if ($(this).attr('data-region') == $region) {
                $(this).addClass('geography-of-sales--visible');
            }
        });
    }*/

    getClient() {

        let clientWidth = document.documentElement.clientWidth;
        return clientWidth;
    }
}