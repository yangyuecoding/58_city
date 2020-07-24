import React, { Component } from 'react';
let { Provider,Consumer } = React.createContext();
 class MyContext extends Component {
    render() {
        return (
            <div>
                <Provider value={666}> 
                { this.props.children }
                </Provider>
            </div>
        )
    }
}
export { MyContext, Consumer };
