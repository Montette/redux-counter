import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
=======
import { createStore, combineReducers } from 'redux';
>>>>>>> 6c8c662064472e34b5344bc11a206d9f9014a7e2
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

<<<<<<< HEAD
const logger = store =>  {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
           const result =  next(action);
           console.log('[Middleware] next state', store.getState());
           return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
=======
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
>>>>>>> 6c8c662064472e34b5344bc11a206d9f9014a7e2

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
