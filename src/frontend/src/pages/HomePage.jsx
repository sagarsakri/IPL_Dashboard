import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchAllTeams = async () => {
            const response = await fetch(`http://localhost:8080/teams`);
            const data = await response.json();
            setTeams(data)
        };
        fetchAllTeams();
    }, []);

    if (!teams) {
        return <h1>!!! The Teams Not Found !!!</h1>
    }
    return (
        <div className="HomePage">
            <h1 className="app-Name">Welcome to IPL DashBoard</h1>
            <div className="team-list">
                {
                    teams.map(team => {
                        return (
                            <div key={team.id}>

                                <h1>
                                    <Link to={`/teams/${team.teamName}`} >{team.teamName}</Link>
                                </h1>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
