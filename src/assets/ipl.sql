-- 1 Maximum Toss Winners (maximumTosses.json)
SELECT toss_winner, COUNT(*) FROM Matches GROUP BY toss_winner

-- 2 Toss decisions accross seasons (tossDecisions.json)
SELECT season, toss_decision, COUNT(*) FROM Matches GROUP BY season, toss_decision

-- 3 Matches played accross each season (matchesPlayed.json)
SELECT season, COUNT(*) FROM Matches GROUP BY season

-- 4 Total Runs accross seasons (totalRuns.json)
SELECT M.season, SUM(D.total_runs) 
FROM deliveries AS D, matches AS M WHERE D.match_id = M.id GROUP BY M.season

-- 5 Average runs accross seasons

-- 6 Total Sixes and Fours (sixesFours.json)
SELECT * FROM SIX NATURAL JOIN FOURS

-- 7 Runs Per Over By Teams Across Seasons (runsOver.json)
SELECT batting_team,over,SUM(total_runs) 
FROM matches AS M,deliveries AS D WHERE M.id=D.match_id GROUP BY over, batting_team
