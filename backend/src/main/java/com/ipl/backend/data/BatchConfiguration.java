package com.ipl.backend.data;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.batch.core.Job;

import javax.sql.DataSource;

import com.ipl.backend.model.Match;

@Configuration
public class BatchConfiguration {

  private final String[] CSV_HEADERS = new String[] { "id", "season", "city", "date", "match_type", "player_of_match",
      "venue", "team1", "team2", "toss_winner", "toss_decision", "winner", "result", "result_margin", "target_runs",
      "target_overs", "super_over", "method", "umpire1", "umpire2" };



  @Bean
  FlatFileItemReader<MatchInput> reader() {
    return new FlatFileItemReaderBuilder<MatchInput>()
        .name("MatchItemReader")
        .resource(new ClassPathResource("matches.csv"))
        .delimited()
        .names(CSV_HEADERS)
        .targetType(MatchInput.class)
        .build();
  }

  @Bean
  MatchDataProcessor processor() {
    return new MatchDataProcessor();
  }

  @Bean
  JdbcBatchItemWriter<Match> writer(DataSource dataSource) {
    return new JdbcBatchItemWriterBuilder<Match>()
        .sql(
            "INSERT INTO match (id, season, city, date, match_type, player_of_match, venue, team1, team2, toss_winner, toss_decision, winner, result, result_margin, target_runs, target_overs, super_over, method, umpire1, umpire2)"
                +
                "VALUES (:id, :season, :city, :date, :match_type, :player_of_match, :venue, :team1, :team2, :toss_winner, :toss_decision, :winner, :result, :result_margin, :target_runs, :target_overs, :super_over, :method, :umpire1, :umpire2)")
        .dataSource(dataSource)
        .beanMapped()
        .build();
  }

  @Bean
  Job importUserJob(JobRepository jobRepository, Step step1, JobCompletionNotificationListener listener) {
    return new JobBuilder("importUserJob", jobRepository)
        .listener(listener)
        .start(step1)
        .build();
  }

  @Bean
  public Step step1(JobRepository jobRepository, DataSourceTransactionManager transactionManager,
      FlatFileItemReader<MatchInput> reader, MatchDataProcessor processor, JdbcBatchItemWriter<Match> writer) {
    return new StepBuilder("step1", jobRepository)
        .<MatchInput, Match>chunk(3, transactionManager)
        .reader(reader)
        .processor(processor)
        .writer(writer)
        .build();
  }

  @Bean
  PlatformTransactionManager transactionManager(DataSource dataSource) {
    return new DataSourceTransactionManager(dataSource);
  }
}
