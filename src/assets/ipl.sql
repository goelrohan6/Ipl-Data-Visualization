--1 Maximum Toss Winners (maximumTosses.json)
SELECT toss_winner, count FROM Matches GROUP BY toss_winner

--2 Toss decisions accross seasons (tossDecisions.json)
SELECT season, toss_decision, count FROM Matches GROUP BY season, toss_decision

--3 Matches played accross each season (matchesPlayed.json)
SELECT season, count FROM Matches GROUP BY season

--4 Total Runs accross seasons (totalRuns.json)
SELECT M.season, SUM(D.total_runs) 
FROM deliveries AS D, matches AS M WHERE D.match_id = M.id GROUP BY M.season

--5 Average runs accross seasons


--6 Total Sixes and Fours (sixesFours.json)
SELECT * FROM SIX NATURAL JOIN FOURS

--7 Runs Per Over By Teams Across Seasons (runsOver.json)
SELECT batting_team,over,SUM(total_runs) 
FROM matches AS M,deliveries AS D WHERE M.id=D.match_id GROUP BY over, batting_team

--8 Favorite Grounds (favGrounds.json)
SELECT venue, count as total from matches group by venue order by total desc

--9 max Player of the matches (playerOfMatch.json)
SELECT player_match, count as total from matches group by player_match order by total desc

-- 10 Number of (0 1 2 3 4 5 6) runs for every team (deliveries.json)
SELECT batting_team, batsman_runs, COUNT(*) FROM deliveries GROUP BY batting_team, batsman_runs

-- 11 Box plot for each team by runs (boxplot.json)

-- 12 Extra runs by teams
SELECT sum(wide_runs), sum(bye_runs), sum(legbye_runs), sum(noball_runs),sum(penalty_runs), batting_team 
from deliveries GROUP BY batting_team;