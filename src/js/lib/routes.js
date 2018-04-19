// https://reacttraining.com/react-router/web/guides/philosophy

/**
 * Configured routes
 */
const routes = {
    'home': '/',
    'about': '/about',
    'categories': '/category',
    'category': params => `/category/${params.category}`
};

/**
 * Given a path name and params, return configured route path.
 *
 * @param {String} name Route name
 * @param {String} params Route params
 *
 * @returns {String} Route path
 */
function route(name, params) {
    if (Object.prototype.hasOwnProperty.call(routes, name)) {
        return typeof routes[name] === 'function' ? routes[name](params) : routes[name];
    }
    return '/';
}

export { routes, route };
