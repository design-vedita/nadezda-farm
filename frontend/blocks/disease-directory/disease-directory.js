import $ from 'jquery';
import Module from '../../includes/Module';
import App from '../../includes/App';

// Каталог по болезням
export default class DiseaseDirectory extends Module {

    constructor() {
        super({
            name: 'Disease-directory',
            self: '.js-disease'
        });
    }

    init() {
        this.$titles = $('.js-disease-title', this.$root);

        this.$titles.on('click', $.proxy(this.openList, this));
        App.win.on('resize', $.proxy(this.getClient, this));
    }

    openList(e) {
        let target = e.currentTarget;
        let $parent = $(target).parent();

        if (this.getClient() < 768) {

            $(target).toggleClass('disease-directory__title--open');
            $parent
                .find('.js-disease-all-list')
                .toggle();
        }
    }

    getClient() {
        let clientWidth = document.documentElement.clientWidth;

        return clientWidth;
    }

}
