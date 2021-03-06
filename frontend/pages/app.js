'use strict';

import $ from 'jquery';
import './app.styl';

import App from '../includes/App.js';
import Header from '../blocks/header/header.js';
import SliderIndex from '../blocks/slider/slider.js';
import Filter from '../blocks/left-filter/left-filter';
import Map from '../blocks/map/map';
import Similar from '../blocks/similar/similar';
import NewsOnce from '../blocks/news-once/news-once';
import Question from '../blocks/question/question'
import Popup from '../blocks/popups/popup'
import YandexMapContacts from '../blocks/yandex-map-contacts/yandex-map-contacts'
import GeographyOfSales from '../blocks/geography-of-sales/geography-of-sales'
import DiseaseDirectory from '../blocks/disease-directory/disease-directory'

$(() => {

    if (App.is_ff) {
        App.htmlTag.addClass('ff');
    }
    if (App.is_chr) {
        App.htmlTag.addClass('chrome');
    }
    if (App.is_ie) {
        App.htmlTag.addClass('ie');
    }
    if (App.is_android) {
        App.htmlTag.addClass('android');
    }
    if (App.is_mac) {
        App.htmlTag.addClass('mac');
    }
    if (App.is_safari) {
        App.htmlTag.addClass('safari');
    }
    if (App.is_ios) {
        App.htmlTag.addClass('ios');
    }

    if (App.is_edge) {
        App.htmlTag.addClass('edge');
    }

    App.modules.push(new Header);
    App.modules.push(new SliderIndex);
    App.modules.push(new Filter);
    App.modules.push(new Map);
    App.modules.push(new Similar);
    App.modules.push(new NewsOnce);
    App.modules.push(new Question);
    App.modules.push(new Popup);
    App.modules.push(new GeographyOfSales);
    App.modules.push(new YandexMapContacts);
    App.modules.push(new DiseaseDirectory);
});




