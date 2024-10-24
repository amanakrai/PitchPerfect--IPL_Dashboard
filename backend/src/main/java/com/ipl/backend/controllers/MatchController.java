package com.ipl.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.ipl.backend.dto.TeamStats;
import com.ipl.backend.model.Match;
import com.ipl.backend.service.MatchService;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.ipl.backend.dto.TeamStats;



@RestController
@RequestMapping("/api")
@CrossOrigin
public class MatchController {

    @Autowired
    private MatchService matchService;

    @GetMapping("/match/{year}")
    public ResponseEntity<List<Match>> yearlyMatches(@PathVariable String year) {

        List<Match> matches = new ArrayList<>();

        try {
            matches = matchService.getMatchesByYear(year);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<List<Match>>(matches, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<List<Match>>(matches, HttpStatus.OK);

    }

    @GetMapping("/match/{teamName}/{year}")
    public ResponseEntity<List<Match>> getMethodName(@PathVariable String teamName, @PathVariable String year) {
       
        // HashMap<List<Match>, TeamStats> TeamSeasonStatsMap = new HashMap<>();
       List<Match> MatchList = new ArrayList<>();

        try {
            MatchList = matchService.getMatchesOfTeamByYear(teamName,year);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<List<Match>>(MatchList, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<List<Match>>(MatchList, HttpStatus.OK);

    }

    @GetMapping("/match/strats/{teamName}/{year}")
    public ResponseEntity<TeamStats> getTeamStratByYear(@PathVariable String teamName, @PathVariable String year) {
        TeamStats teamStats = new TeamStats();
        try {
            teamStats = matchService.getTeamStratsByYear(teamName, year);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<TeamStats>(teamStats, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<TeamStats>(teamStats, HttpStatus.OK);

    }
    
    

}
