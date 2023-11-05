import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './redux/reducers/userReducers';

const initialState = {
    userLogin:{
        userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
    }
};

const reducer = combineReducers({
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
  
  export default store;