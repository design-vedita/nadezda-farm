import $ from 'jquery';
import Module from '../../includes/Module';
import App from '../../includes/App';

// Шапка сайта
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
        this.$two_submenu = $('.js-header-submenu-two', this.$root);

        this.$list_city = $('.js-city-list', this.$root);
        this.$link_city = $('.js-city-link', this.$root);

        this.$button_open_header = $('.js-open-header-mobile', this.$root);
        this.$blocks_visible = $('.js-visible-mobile', this.$root);

        // Обработка кликов меню
        this.$menu.on('click',  $.proxy(this.openMenu, this));
        App.doc.on('click', $.proxy(this.closeMenu, this));
        App.win.on('resize', $.proxy(this.addMarkerClass, this));


        this.addMarkerClass();

        // Обработка кликов списка городов
        this.$link_city.on('click', $.proxy(this.openListCity, this));
        App.doc.on('click', $.proxy(this.closeListCity, this));

        // Обработка клика на кнопку меню в шапке на мобильниках
        this.$button_open_header.on('click', $.proxy(this.openMobileHeader, this));
    }

    // Открытие меню
    openMenu(e) {
        let clientWidth = document.documentElement.clientWidth;

        if (clientWidth < 1200 && clientWidth > 767) {
            let target = e.currentTarget;

            if ($(e.target.parentElement).hasClass('js-header-menu')) {
                e.preventDefault();
            }

            $(target).toggleClass('header__li--open');
            this.$submenu.toggleClass('header__submenu-one--open');
        }

        // Обработчик под мобильные устройства
        if (clientWidth < 767) {

            let target = e.currentTarget;

            // Отключаем переход по ссылке Каталог
            if ($(e.target.parentElement).hasClass('js-header-menu')) {
                e.preventDefault();
            }

            if (!$(e.target).hasClass('js-header-submenu-two')) {

                $(target).toggleClass('header__li--open');
                this.$submenu.toggleClass('header__submenu-one--open');

            } else {
                // Отключаем переход при клике во 2 уровне меню по ссылке
                e.preventDefault();
                let targets = e.target;

                // Если есть поменю, то показываем его
                $(targets)
                        .toggleClass('open')
                        .parent()
                        .toggleClass('open')
                        .find('.header__submenu-two')
                        .toggleClass('header__submenu-two--open');
            }
        }
    }

    // Закрытие меню при клике не в меню
    closeMenu(e) {
        let clientWidth = document.documentElement.clientWidth;
        if (clientWidth < 1200 && clientWidth > 767) {
            if($(e.target).closest(this.$menu).length) return;

            if (!$(e.target).closest( this.$menu ).length) {
                this.$menu.removeClass('header__li--open');
                this.$submenu.removeClass('header__submenu-one--open');
            }
            e.stopPropagation();
        }
    }

    addMarkerClass() {
        let clientWidth = document.documentElement.clientWidth;
        if (clientWidth >= 1200) {
            this.$menu.addClass('header__li--desktop');
        } else {
            this.$menu.removeClass('header__li--desktop');
        }
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

    // На телефонах по клику на кнопку меню показываем все элементы шапки
    openMobileHeader(e) {

        let target = e.currentTarget;

        $(target).toggleClass('button--open');

        this.$blocks_visible.toggle();

        // Т.к. флексбокс используется, то вешаем на нужный блок его
        this.$blocks_visible.each(function(){
            if ($(this).hasClass('header__cart')) {
                $(this).toggleClass('header__cart--flex');
            }
        });
    }
}
