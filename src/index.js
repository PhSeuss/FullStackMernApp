import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './component/App'
import data from './testData'


ReactDOM.render(
    <App contests={data.contests}/>,
    document.getElementById('root')
)