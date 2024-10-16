package com.ipl.backend.repoDAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ipl.backend.model.Match;

@Repository
public interface MatchDAO extends JpaRepository<Match,Long> {
    
    @Query("select m from Match m where Year(date) = :year order by m.date desc")
    List<Match> getMatchesByYear(@Param("year") String year);


    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and Year(m.date) = :year  order by m.date desc")
    List<Match> getTeamMatchesByYear(@Param("teamName") String teamName, @Param("year") String year);

}
