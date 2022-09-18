package com.ninjavin.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.ninjavin.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
  Team findByTeamName(String teamName);
}
