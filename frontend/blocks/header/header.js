import Module from '../../includes/Module';
import App from '../../includes/App';

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
        App.doc.on('click', $.proxy(this.closeListCity, this));
    }

    // Показываем список городов
    openListCity() {
        this.$list_city.toggleClass('header__city-list--open');
    }

    // Клик вне списка городов
    closeListCity(e) {
        if($(e.target).closest(this.$list_city).length) return;

        if (!$(e.target).closest( this.$link_city).length) {
            this.$list_city.removeClass('header__city-list--open');
        }

        e.stopPropagation();
    }
}
