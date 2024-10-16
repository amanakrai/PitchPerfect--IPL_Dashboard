package com.ipl.backend.data;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.springframework.batch.item.ItemProcessor;

import com.ipl.backend.model.Match;
import java.time.LocalDate;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

  private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

  @Override
  public Match process(final MatchInput mi) {

    Match match = new Match();
    match.setId(Long.parseLong(mi.getId()));
    match.setSeason(mi.getSeason());
    match.setCity(mi.getCity());
    match.setDate(LocalDate.parse(mi.getDate()));
    match.setMatch_type(mi.getMatch_type());
    match.setPlayer_of_match(mi.getPlayer_of_match());
    match.setVenue(mi.getVenue());

    String firstInnings;
    String secongInnings;

    if(mi.getToss_decision().equals("bat")){
        if(mi.getToss_winner().equals(mi.getTeam1())){
          firstInnings = mi.getTeam1();
          secongInnings = mi.getTeam2(); 
        }else{
          firstInnings =mi.getTeam2();  
          secongInnings = mi.getTeam1(); 
        }
    }else {
      if(mi.getToss_winner().equals(mi.getTeam1())){
          firstInnings =mi.getTeam2();  
          secongInnings = mi.getTeam1(); 
      }else{
          firstInnings = mi.getTeam1();
          secongInnings = mi.getTeam2();
      }
    }

    match.setTeam1(firstInnings);
    match.setTeam2(secongInnings);
    match.setToss_winner(mi.getToss_winner());
    match.setToss_decision(mi.getToss_decision());
    match.setWinner(mi.getWinner());
    match.setResult(mi.getResult());
    match.setResult_margin(mi.getResult_margin());
    match.setTarget_runs(mi.getTarget_runs());
    match.setTarget_overs(mi.getTarget_overs());
    match.setSuper_over(mi.getSuper_over());
    match.setMethod(mi.getMethod());
    match.setUmpire1(mi.getUmpire1());
    match.setUmpire2(mi.getUmpire2());

    return match;
  }
}
