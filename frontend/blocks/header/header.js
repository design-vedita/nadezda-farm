import Module from '../../includes/Module';

export default class Header extends Module {

    constructor() {
        super({
            name: 'Header',
            self: '.js-header'
        });
    }

    init() {
        this.$list_city = $('.js-city-list', this.$root);
        this.$link_city = $('.js-city-link', this.$root);

        this.$link_city.on('click', $.proxy(this.openListCity, this));
    }

    openListCity() {
        this.$list_city.toggleClass('header__city-list--open');
    }
}
