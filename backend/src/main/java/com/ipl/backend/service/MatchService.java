package com.ipl.backend.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipl.backend.dto.TeamStats;
import com.ipl.backend.model.Match;
import com.ipl.backend.repoDAO.MatchDAO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class MatchService {

    @Autowired
    private MatchDAO matchDAO;

    public List<Match> getMatchesByYear(String year) {

        List<Match> matches = new ArrayList<>();

        if (year == null || year.isEmpty()) {
            throw new IllegalArgumentException("year must not be null");
        }

        matches = matchDAO.getMatchesByYear(year);
        return matches;

    }

    public List<Match> getMatchesOfTeamByYear(String teamName, String year) throws JsonProcessingException {

        List<Match> matches = new ArrayList<>();
       
        matches = matchDAO.getTeamMatchesByYear(teamName, year);
        
        return matches;
    }

    public TeamStats getTeamStratsByYear (String teamName, String year) throws JsonProcessingException{
        
        List<Match> matches = new ArrayList<>();
        HashMap<String, String> teamStratsPerYear = new HashMap<>();

        TeamStats teamStats = new TeamStats();
        
        matches = matchDAO.getTeamMatchesByYear(teamName, year);

        Float totalMatches = Float.valueOf(matches.size());

        // Wins
        Float totalWins = Float.valueOf(matches.stream().filter(m -> m.getWinner().equals(teamName)).count());

        // Toss Wins
        Float tossWins = Float.valueOf(matches.stream().filter(m -> m.getToss_winner().equals(teamName)).count());

        // Bat first wins
        Float batFirst = Float.valueOf(matches.stream().filter(m -> m.getTeam1().equals(teamName)).count());

        Float batFirstAndWon = Float.valueOf(matches.stream().filter(m -> m.getTeam1().equals(teamName))
                .filter(m -> m.getWinner().equals(teamName)).count());

        // Fild first wins
        Float fieldFirst = Float.valueOf(matches.stream().filter(m -> m.getTeam2().equals(teamName)).count());
        Float fieldFirstAndWon = Float.valueOf(matches.stream().filter(m -> m.getTeam2().equals(teamName))
                .filter(m -> m.getWinner().equals(teamName)).count());
                
        System.out.println("FeildFirstAndWon"+fieldFirstAndWon);
        // teamStratsPerYear.put("teamName", teamName);
        // teamStratsPerYear.put("totalMatches",String.valueOf(totalMatches));
        // teamStratsPerYear.put("totalWins", String.valueOf(totalWins));
        // teamStratsPerYear.put("winPerc", String.valueOf((totalWins / totalMatches) * 100));
        // teamStratsPerYear.put("tossWinPerc", String.valueOf((tossWins / totalMatches) * 100));
        // teamStratsPerYear.put("BatFirstWinPerc", String.valueOf((batFirstAndWon / batFirst) * 100));
        // teamStratsPerYear.put("FieldFirstWinPerc", String.valueOf((fieldFirstAndWon / fieldFirst) * 100));

        teamStats.setTeamName(teamName);
        teamStats.setWinPct((totalWins / totalMatches) * 100);
        teamStats.setBatFirstWinPct((batFirstAndWon / batFirst) * 100);
        teamStats.setFieldFirstPct((fieldFirstAndWon / fieldFirst) * 100);
        teamStats.setTossWinPct(tossWins);
        teamStats.setTotalMatches(totalMatches);
        teamStats.setTotalWins(totalWins);
        teamStats.setBatFirstWin(batFirstAndWon);
        teamStats.setFieldFirstWin(fieldFirstAndWon);
    
        // ObjectMapper objectMapper = new ObjectMapper();
        // String jsonStratString = objectMapper.writeValueAsString(teamStratsPerYear);
        
        return teamStats;
    }

}
