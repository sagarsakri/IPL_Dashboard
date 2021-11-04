package com.sagar.ipl_dashboard.controller;

import com.sagar.ipl_dashboard.model.Team;
import com.sagar.ipl_dashboard.repository.MatchRepository;
import com.sagar.ipl_dashboard.repository.TeamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    @Autowired
    private TeamRepository teamRepo;
    @Autowired
    private MatchRepository matchRepo;

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = teamRepo.findByTeamName(teamName);
        team.setMatches(matchRepo.findLatestMatchesByTeam(teamName, 4));
        return team;
    }
}
