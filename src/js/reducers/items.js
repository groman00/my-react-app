const initialState = [];

const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    text: action.text
                }
            ];
        case 'GET_ITEMS':
            return state;
        case 'GET_ITEMS_OK':
            return [
                ...state,
                ...action.items
            ];
        case 'GET_ITEMS_FAIL':
            return state;
        default:
            return state;
    }
};

export default items;
