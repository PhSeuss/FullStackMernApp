import React from 'react'
import ContestPreview from './ContestPreview'


const ContestList = ({contests}) => {
    return (
        <div className="ContestList">
            <div>
                {contests.map(contest => 
                    <ContestPreview key={contest.id} contest={contest} />
                )}   
            </div>
        </div>
    )
}

export default ContestList
