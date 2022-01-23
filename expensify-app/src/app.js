import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// addExpense -> Water Bill
store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 100
}));
// addExpense -> Gas Bill
store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 300
}));
// setTextFilter -> bill
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));;
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
