/* eslint-disable import/prefer-default-export */

export const addItem = text => ({
    type: 'ADD_ITEM',
    text
});

export const getItems = () => ({
    type: 'GET_ITEMS'
});
