import React from 'react'

export const MatchDetailCard = ({ match }) => {
    if (!match) return null;
    return (
        <div className="MatchDetailCard">
            <h1>{match.team1}</h1>
            <h3>Match Detail</h3>
            <p>{match.team1} vs {match.team2} </p>
        </div>
    )
}
