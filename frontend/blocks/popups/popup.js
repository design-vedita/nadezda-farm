import $ from 'jquery';
import Module from '../../includes/Module';
import App from '../../includes/App'

// Попап основные параметры
export default class Popup extends Module {

    constructor() {
        super({
            name: 'Popup',
            self: '.js-popup'
        });
    }

    init() {
        this.$close = $('.js-close', this.$root);
        this.$close.on('click', $.proxy(this.closePopup, this));
    }

    // Закрываем попапы, общий обработчик для всех
    closePopup(e) {
        let target = e.currentTarget;
        let $parent = $(target).parents('.js-popup');
        $parent.removeClass('popup--visible');

        // Удаляем затемнение за попапом
        App.body.removeClass('open--popup');

    }

}