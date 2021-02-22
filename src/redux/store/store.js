import {createStore,applyMiddleware,combineReducers} from 'redux';
import projectReducer from '../reducer/projectReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import resumeReducer from '../reducer/resumeReducer';

const thunkMiddleware = require('redux-thunk').default;


const newReducer = combineReducers({
    project: projectReducer,
    resume: resumeReducer
})

const store = createStore(newReducer ,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;