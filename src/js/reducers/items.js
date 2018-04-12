const initialState = [
    { text: 'foo' },
    { text: 'bar' },
    { text: 'fizz' },
    { text: 'buzz' }
];

const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    text: action.text
                }
            ];
        default:
            return state;
    }
};

export default items;
