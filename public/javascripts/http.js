const post = (url = '', data = {}) =>
    fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    });


const get = (url = '') =>
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

export {get, post};
