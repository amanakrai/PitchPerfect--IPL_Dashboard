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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/api")
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
    public ResponseEntity<HashMap<List<Match>, TeamStats>> getMethodName(@PathVariable String teamName, @PathVariable String year) {
       
        HashMap<List<Match>, TeamStats> TeamSeasonStatsMap = new HashMap<>();

        try {
            TeamSeasonStatsMap = matchService.getMatchesOfTeamByYear(teamName,year);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<HashMap<List<Match>, TeamStats>>(TeamSeasonStatsMap, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<HashMap<List<Match>, TeamStats>>(TeamSeasonStatsMap, HttpStatus.OK);

    }
    

}
