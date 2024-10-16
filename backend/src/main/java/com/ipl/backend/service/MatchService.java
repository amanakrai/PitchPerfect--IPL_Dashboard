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

    public HashMap<List<Match>, TeamStats> getMatchesOfTeamByYear(String teamName, String year) {

        List<Match> matches = new ArrayList<>();
        TeamStats stats = new TeamStats();
        HashMap<List<Match>, TeamStats> TeamSeasonStatsMap = new HashMap<>();

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

        stats.setTeamName(teamName);
        stats.setTotalMatches(totalMatches);
        stats.setTotalWins(totalWins);
        stats.setWinPct((totalWins / totalMatches) * 100);
        stats.setTossWinPct((tossWins / totalMatches) * 100);
        stats.setBatFirstWinPct((batFirstAndWon / batFirst) * 100);
        stats.setFieldFirstPct((fieldFirstAndWon / fieldFirst) * 100);

        TeamSeasonStatsMap.put(matches, stats);

        // System.out.println("Win Percentage of : " + teamName + "is " + (totalWins / totalMatches) * 100);
        // System.out.println("Toss Win Percentage of : " + teamName + "is " + (tossWins / totalMatches) * 100);
        // System.out.println("Bat First Win Percentage of : " + teamName + "is " + (batFirstAndWon / batFirst) * 100);
        // System.out.println("Field First Win Percentage of : " + teamName + "is " + (fieldFirstAndWon / fieldFirst) * 100);
        System.out.println(TeamSeasonStatsMap.toString());

        return TeamSeasonStatsMap;
    }

}
