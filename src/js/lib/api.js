/*
https://redux.js.org/advanced/async-actions
https://appendto.com/2017/01/3-libraries-and-3-ways-to-handle-ajax-in-react-apps/

Using Fetch API.
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

// import axios from 'axios';
// import router from '../routers/api';
// import store from '../store';
// import { getAccessToken } from './auth';
// import { objectToQueryString } from './helpers';

class Api {
    constructor(http) {
        this.http = http;
    }

    /**
     * GET requested api route by name
     * @param  {String} name
     * @param  {Object} params
     * @param  {Object} query
     * @param  {Object} config
     * @return {Promise}
     */
    get(name, params = {}, query = {}, config = {}) {
        return new Promise((resolve, reject) => {
            this.http(name)
                .then(response => response.json())
                .then((json) => {
                    // Do something with intercepted json
                    resolve(json);
                })
                .catch((error) => {
                    // Do something with intercepted error
                    reject(error);
                });
        });
    }
}

export default (new Api(window.fetch.bind(window)));
