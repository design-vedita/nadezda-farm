import Module from '../../includes/Module';
let $ = require('jquery');
require('fancybox')($);

// Одиночная новость
export default class NewsOnce extends Module {

    constructor() {
        super({
            name: 'News once',
            self: '.js-news-once'
        });
    }

    init() {
        this.$fancyImage = $('.js-fancybox');
        this.$fancyImage.fancybox();
    }
}