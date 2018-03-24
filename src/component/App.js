import React from 'react'
import Header from './Header'
import ContestPreview from './ContestPreview'

class App extends React.Component{
    state = {
        headerMessage: "Bullshit that i'm doing"
    }
    render(){
        return (
            <div className="App">
                <Header message={this.state.headerMessage} />
                <div>
                    <ContestPreview contest = {this.props.contests[0]} />
                </div>
            </div>
        )
    }

}

export default App
