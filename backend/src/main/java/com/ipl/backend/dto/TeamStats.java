package com.ipl.backend.dto;

import lombok.Data;

@Data
public class TeamStats {
    
    private String teamName;
    private Float totalMatches;
    private Float totalWins;
    private Float winPct;
    private Float tossWinPct;
    private Float batFirstWinPct;
    private Float fieldFirstPct;
    private Float batFirstWin;
    private Float fieldFirstWin;

}
