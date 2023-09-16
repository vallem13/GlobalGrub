import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import restaurantReducer from './restaurant'
import reviewReducer from './review'
import cartReducer from './cart';
import cuisineReducer from './cuisine'
import menuItemReducer from './menu';
import filterReducer from './filter';

const rootReducer = combineReducers({
  session,
  cart: cartReducer,
  review: reviewReducer,
  restaurant: restaurantReducer,
  cuisine: cuisineReducer,
  menu: menuItemReducer,
  filter: filterReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
