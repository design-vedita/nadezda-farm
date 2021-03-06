import $ from 'jquery';
import Module from '../../includes/Module';

// Попап основные параметры
export default class Popup extends Module {

    constructor() {
        super({
            name: 'Popup',
            self: '.js-popup'
        });
    }

    init() {
        this.$body = $('body');
        this.$close = $('.js-close', this.$root);
        this.$close.on('click', $.proxy(this.closePopup, this));
    }

    // Закрываем попапы, общий обработчик для всех
    closePopup(e) {
        let target = e.currentTarget;
        let $parent = $(target).parents('.js-popup');
        $parent.removeClass('popup--visible');

        // Удаляем затемнение за попапом
        this.$body.removeClass('open--popup');

    }

}