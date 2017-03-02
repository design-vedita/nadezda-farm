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
        this.$menu = $('.js-header-menu', this.$root);
        this.$submenu = $('.js-header-submenu', this.$root);

        this.$list_city = $('.js-city-list', this.$root);
        this.$link_city = $('.js-city-link', this.$root);

        // Обработка кликов меню
        this.$menu.on('click',  $.proxy(this.openMenu, this));
        App.doc.on('click', $.proxy(this.closeMenu, this));

        // Обработка кликов списка городов
        this.$link_city.on('click', $.proxy(this.openListCity, this));
        App.doc.on('click', $.proxy(this.closeListCity, this));
    }

    // Открытие меню
    openMenu(e) {
        const target = e.currentTarget;
            $(target).toggleClass('header__li--open');
            this.$submenu.toggleClass('header__submenu-one--open');
    }

    // Закрытие меню при клике не в меню
    closeMenu(e) {
        if($(e.target).closest(this.$menu).length) return;

        if (!$(e.target).closest( this.$menu ).length) {
            this.$menu.removeClass('header__li--open');
            this.$submenu.removeClass('header__submenu-one--open');
        }

        e.stopPropagation();
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
