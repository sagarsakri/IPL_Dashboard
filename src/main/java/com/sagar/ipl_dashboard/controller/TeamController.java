package com.sagar.ipl_dashboard.controller;

import java.time.LocalDate;
import java.util.List;

import com.sagar.ipl_dashboard.model.Match;
import com.sagar.ipl_dashboard.model.Team;
import com.sagar.ipl_dashboard.repository.MatchRepository;
import com.sagar.ipl_dashboard.repository.TeamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    @Autowired
    private TeamRepository teamRepo;
    @Autowired
    private MatchRepository matchRepo;


    @GetMapping("/teams")
    public Iterable<Team> getAllTeams(){
        return teamRepo.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = teamRepo.findByTeamName(teamName);
        team.setMatches(matchRepo.findLatestMatchesByTeam(teamName, 4));
        return team;
    }
    
    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return matchRepo.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    }
}
