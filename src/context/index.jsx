import React, { Component,createContext } from 'react'
let { Provider,Consumer } = createContext();
 class MyIndex extends Component {
    render() {
        return (
            <div>
                <Provider value={"hello"}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}
export { Consumer,MyIndex};