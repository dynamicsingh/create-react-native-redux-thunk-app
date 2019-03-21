import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/index";

export default function configureStore(onCompletion: () => void): any {
    const enhancer = compose(
        applyMiddleware(thunk)
    );
    return createStore(reducer, enhancer);
}
