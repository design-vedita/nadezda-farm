'use strict';

import './app.styl';
import './index.pug';
import './catalog.pug';
import App from '../includes/App.js';
import Header from '../blocks/header/header.js';
import SliderIndex from '../blocks/slider/slider.js';

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

});




