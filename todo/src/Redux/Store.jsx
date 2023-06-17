import {createStore} from "redux";
import rootReducer from './IndexRoot';
const store =createStore(rootReducer);

export default store;