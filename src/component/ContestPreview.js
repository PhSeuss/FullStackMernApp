import React from 'react'

const ContestPreview = ({contest}) =>(
    <div className="ContestPreview">
        {contest.categoryName}: 
        {contest.contestName}
    </div>
)
// contestPreview.propTypes = {
//     message: PropTypes.string
// };

export default ContestPreview