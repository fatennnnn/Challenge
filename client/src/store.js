import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducerDoctor from "./reducer/reducerdoctor";

export const store = createStore(
         reducerDoctor,
         compose(
           applyMiddleware(thunk),
           window.__REDUX_DEVTOOLS_EXTENSION__ &&
             window.__REDUX_DEVTOOLS_EXTENSION__()
         )
       );
