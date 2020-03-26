import createRow from './dom.js';
import {get} from './http.js'

((window, document) => {
    'use strict';

    let el = document.getElementById('tbody');

    const processingData = (data = []) => {
        data.forEach((item, index) => {
            createRow(el, item);
        });
    }

    get('/api/os/info')
        .then((res) => res.json())
        .then((data) => {
            processingData(data)
        })
        .catch((error) => {
            console.error(error);
        });

})(window, document);


