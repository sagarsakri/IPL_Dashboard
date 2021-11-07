import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'
import { useParams } from 'react-router';

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName,year } = useParams();
    // const teamName = "Delhi Capitals";

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            console.log(data);
            setMatches(data)
        };
        fetchMatches();

    }, [teamName]);

    return (

        <div className="MatchPage">
            <h2>Matches</h2>
            {
                matches.map(match => {
                    return (
                        <MatchDetailCard key={match.id} teamName={teamName} match={match} />
                    )
                })
            }
        </div>
    )
}
//localhost:3000/teams/{teamName}/matches/{year}