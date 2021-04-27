SELECT assignments.id, assignments.name, day, chapter, count(assistance_requests.*) as total_assistances
FROM assignments
JOIN assistance_requests on assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_assistances DESC;