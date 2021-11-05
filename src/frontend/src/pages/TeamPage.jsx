import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'

export const TeamPage = () => {
    const [team, setTeam] = useState({ matches: [] });


    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch('http://localhost:8080/team/Rajasthan Royals');
            const data = await response.json();
            console.log(data);
            setTeam(data)
        };
        fetchMatches();

    }, []);

    return (

        <div className="TeamPage">
            <h3>{team.teamName}</h3>
            <MatchDetailCard match={team.matches[0]} />
            {
                team.matches.slice(1).map(match => {
                    return (
                        <MatchSmallCard key={match.id} match={match} />
                    )
                })
            }
        </div>
    )
}
