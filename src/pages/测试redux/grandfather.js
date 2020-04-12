import React, { Component } from 'react'
import Fath from './fath'
import store from './stor'
import { Provider } from 'react-redux'

export default class grandfather extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fath ></Fath>
            </Provider>
        )
    }
}
