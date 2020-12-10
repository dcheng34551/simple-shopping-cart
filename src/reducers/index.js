import { combineReducers } from 'redux';

const productsListReducer = () => {
    return [
        { name: 'shirt', price: '500' },
        { name: 'jeans', price: '500' }
    ];
};

const moneyToPayReducer = (total = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return total += 500;
        case 'DECREMENT':
            return total -= 500;
        default:
            return total
    }
}

export default combineReducers({
    products: productsListReducer,
    total: moneyToPayReducer
})
