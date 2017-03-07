import $ from 'jquery';
import Module from '../../includes/Module';
import App from '../../includes/App';

// Вопрос-ответ
export default class Question extends Module {

    constructor() {
        super({
            name: 'Question',
            self: '.js-question'
        });

        this.i = 0;
    }

    init() {
        this.$links = $('.js-question-link', this.$root);
        this.$links.on('click', $.proxy(this.openAnswer, this));
    }

    // Открытие блоков ответов
    openAnswer(e) {

        let target = e.currentTarget;
        let $oldtext = $(target).text();
        let $initial = $(target).attr('data-initial');
        let $change = $(target).attr('data-change');

        if ($oldtext == $initial) {
            $(target).text($change);
        } else {
            $(target).text($initial);
        }

        let $parent = $(target).parents('.js-parent');
            $parent
                .find('.js-answer')
                .toggleClass('question__answer--visible');
    }

    counter() {
        this.i++;
    }
}
