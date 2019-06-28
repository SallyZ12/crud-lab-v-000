import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import restaurants from './reducers/restaurantsReducer'
import reviews from './reducers/reviewsReducer'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


const rootreducer = combineReducers({
restaurants,
reviews
})


const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
