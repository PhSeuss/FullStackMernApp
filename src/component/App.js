import React from 'react'
import Header from './Header'


class App extends React.Component{
    state = {
        headerMessage: "hello from state"
    };
    render(){
        return (
            <div className="App">
                <Header message={this.state.headerMessage} />
                <p>
                    This is body
                </p>
            </div>
        )
    }

};

export default App;
