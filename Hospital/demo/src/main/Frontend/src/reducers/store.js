import { createStore, combineReducers } from "redux";
import usersReducer from "./Login/reducer";


const reducers = combineReducers({usersReducer});

const store = createStore(reducers);

export default store;
