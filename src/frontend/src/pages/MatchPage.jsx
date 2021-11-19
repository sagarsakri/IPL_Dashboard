import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { useParams } from 'react-router';
import './MatchPage.scss';
import { YearSelector } from '../Components/YearSelector';

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();
    // const teamName = "Delhi Capitals";

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data)
        };
        fetchMatches();

    }, [teamName, year]);

    return (

        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year </h3>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h2 className="page-heading">{teamName} Matches in {year} </h2>

                {
                    matches.length === 0 ?
                        <h3>No Matches Found</h3>

                        :
                        matches.map(match => {
                            return (
                                <MatchDetailCard key={match.id} teamName={teamName} match={match} />
                            )
                        })

                }
            </div>
        </div>
    )
}
//localhost:3000/teams/{teamName}/matches/{year}