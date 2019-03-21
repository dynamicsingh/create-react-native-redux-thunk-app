import * as React from "react";
import { Provider } from "react-redux";

import configureStore from "./configStore";
import App from "./../App";

export interface Props {}
export interface State {
    store: Object;
    isLoading: boolean;
}

export default class Setup extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false }))
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}
