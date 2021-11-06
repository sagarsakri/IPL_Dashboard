import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'
import { useParams } from 'react-router';

export const TeamPage = () => {
    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`);
            const data = await response.json();
            console.log(data);
            setTeam(data)
        };
        fetchMatches();

    }, [teamName]);


    if (!team || !team.teamName) {
        return <h2>Team Not Found</h2>
    }

    return (

        <div className="TeamPage">
            <h3>{team.teamName}</h3>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
            {
                team.matches.slice(1).map(match => {
                    return (
                        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
                    )
                })
            }
        </div>
    )
}
