/*
 * Zepto.Detect
 *
 * @version 1.0
 *
 * Copyright (c) 2012 Daniel Lacy (daniellacy.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
**/
(function ($) {
    $.extend($, {
        /*
         * Return (boolean) of client browser capabilities.
        **/
        detect : {
            /*
             * Elements.
            **/
            audio : !!document.createElement('audio').canPlayType,

            canvas : !!document.createElement('canvas').getContext,

            command : 'type' in document.createElement('command'),

            time : 'valueAsDate' in document.createElement('time'),

            video : !!document.createElement('video').canPlayType,

            /*
             * Features and Attributes
            **/
            offline : navigator.hasOwnProperty('onLine') && navigator.onLine,

            appCache : !!window.applicationCache,

            contentEditable : 'isContentEditable' in document.createElement('span'),

            dragDrop : 'draggable' in document.createElement('span'),

            geolocation : !!navigator.geolocation,

            history : !!(window.history && window.history.pushState),

            webSockets : !!window.WebSocket,

            webWorkers : !!window.Worker,

            /*
             * Forms
            **/
            autofocus : 'autofocus' in document.createElement('input'),

            inputPlaceholder : 'placeholder' in document.createElement('input'),

            textareaPlaceholder : 'placeholder' in document.createElement('textarea'),

            typeEmail : function () {
                var i = document.createElement('input');

                i.setAttribute('type', 'email');

                return i.type !== 'text';
            },

            typeNumber : function () {
                var i = document.createElement('input');

                i.setAttribute('type', 'number');

                return i.type !== 'text';
            },

            typeSearch : function () {
                var i = document.createElement('input');

                i.setAttribute('type', 'search');

                return i.type !== 'text';
            },

            typeTel : function () {
                var i = document.createElement('input');

                i.setAttribute('type', 'tel');

                return i.type !== 'text';
            },

            typeUrl : function () {
                var i = document.createElement('input');

                i.setAttribute('type', 'url');

                return i.type !== 'text';
            },


            /*
             * Storage
            **/
            indexDB : !!window.indexedDB,

            localStorage : function () {
                try {
                    return 'localStorage' in window && window['localStorage'] !== null;

                } catch(e) {
                    return false;

                }
            },

            webSQL : !!window.openDatabase,

            /*
             * Touch and orientation capabilities.
            **/
            orientation : 'orientation' in window,

            touch : 'ontouchend' in document,

            scrollTop : ('pageXOffset' in window || 'scrollTop' in document.documentElement) && !$.os.webos,

            /*
             * Propietary features
            **/
            standalone : 'standalone' in window.navigator && window.navigator.standalone
        },

        /*
         * Return (boolean) of likely client device classifications.
        **/
        device : {
            mobile : (screen.width < 768),

            tablet : (screen.width >= 768 && detect.orientation),

            desktop : (screen.width >= 800 && !detect.orientation)
        }
    });
})(Zepto);