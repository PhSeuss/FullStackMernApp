import React from 'react'
import Header from './Header'
import ContestList from './ContestList'


class App extends React.Component{
    state = {
        hM: {headerMessage: "Bullshit that i'm doing"},
        contests: this.props.initialContests
    }
    componentDidMount() {

    }
    render(){
        return (
            <div className="App">
                <Header {...this.state.hM} />
                <div>
                    <ContestList contests={this.state.contests} />
                </div>
            </div>
        )
    }

}

export default App
