import api from '../lib/api';

// https://appendto.com/2017/01/3-libraries-and-3-ways-to-handle-ajax-in-react-apps/

const apiMiddleware = store => next => (action) => {
    console.log('action', action);
    next(action);
    switch (action.type) {
        case 'GET_ITEMS':
            api.get('/fixtures/items.json')
                .then((json) => {
                    console.log(json);
                    const { items } = json;
                    setTimeout(() => { // Simulate latency
                        next({
                            type: 'GET_ITEMS_OK',
                            items
                        });
                    }, 1000);
                })
                .catch((e) => {
                    // console.log(e);
                    next({
                        type: 'GET_ITEMS_FAIL',
                        e
                    });
                });
            break;
        default:
            break;
    }
};

export default apiMiddleware;
