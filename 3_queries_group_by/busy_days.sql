SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
ORDER BY day;
HAVING count(total_assignment.*) >= 10;
