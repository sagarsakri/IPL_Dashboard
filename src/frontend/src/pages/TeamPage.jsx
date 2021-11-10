import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'
import { useParams } from 'react-router';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';
import { Link } from 'react-router-dom';

export const TeamPage = () => {
    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`);
            const data = await response.json();
            setTeam(data)
        };
        fetchMatches();

    }, [teamName]);


    if (!team || !team.teamName) {
        return <h2>Team Not Found</h2>
    }
    return (

        <div className="TeamPage">
            <div className="team-name-section" >
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section" >
                Win / losses
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatchesPlayed - team.totalWins, color: 'rgb(92, 20, 20)' },
                        { title: 'Wins', value:  team.totalWins, color: 'rgb(68, 146, 32)' },
                    ]}
                />
            </div>
            <div className="match-detail-section" >
                <h3>Latest Matches</h3>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
            </div>
            {
                team.matches.slice(1).map(match => {
                    return (
                        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
                    )
                })
            }
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More {'>'} </Link>
            </div>
        </div>
    )
}
