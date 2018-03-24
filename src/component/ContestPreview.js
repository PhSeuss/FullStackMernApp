import React, { Component } from 'react'


class ContestPreview extends Component {
    state = {
        contest: this.props.contest
    }
    handleClick = () => {
        console.log(this.state.contest)
    }
    render() { 
        return (
            <div className="link ContestPreview" onClick={this.handleClick}>
            <div className="categoryName">
                {this.state.contest.categoryName}
            </div>
            <div className="contestName"> 
                {this.state.contest.contestName}
            </div>
            </div>
        )
    }
}

export default ContestPreview