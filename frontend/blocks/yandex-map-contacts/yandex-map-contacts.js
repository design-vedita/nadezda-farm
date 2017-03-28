import Module from '../../includes/Module';
import App from '../../includes/App';
import $ from 'jquery';

// Яндекс карта контакты
export default class YandexMapContacts extends Module {

    constructor() {
        super({
            name: 'Yandex-Map-Contacts',
            self: '.js-yandex-map-contacts'
        });
    }

    init() {
        this.createMap();

       App.win.on('resize', $.proxy(this.getClient, this));
    }

    getClient() {
        let clientWidth = document.documentElement.clientWidth;
        return clientWidth;
    }


    createMap() {

        let _self = this;

        let $map = $('#map');

        if ($map.length > 0) {
            ymaps.ready(function(){

                let myMap;
                let myPlacemark;

                myMap = new ymaps.Map("map", {
                    center: [55.740730068997635,37.634999499999985],
                    zoom: 12
                });

                myPlacemark = new ymaps.Placemark([55.740730068997635,37.634999499999985], {}, {
                    iconLayout: 'default#image',
                    iconImageHref : 'image/marker.png',
                    iconImageSize: [38, 53],
                    iconImageOffset: [-3, -42]
                });

                myMap.geoObjects.add(myPlacemark);
                myMap.behaviors.disable('scrollZoom');

            });
        }

    }
}