SELECT students.name as student, avg(average_assignment_duration.*) AS average_assignment_duration
FROM students 
JOIN assignment_submissions ON student_id = students.id
WHERE end_date IS NULL
GROUP BY student
ORDER BY average_assignment_duration DESC;