const status = (state = false, action) => {
    switch (action.type) {
        case 'GET_ITEMS':
            return true;
        case 'GET_ITEMS_OK':
            return false;
        case 'GET_ITEMS_FAIL':
            return false;
        default:
            return state;
    }
};

export default status;
