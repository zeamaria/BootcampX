SELECT DISTINCT teachers.name as teacher , cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers_id = teachers.id
JOIN students ON cohort_id = cohorts.id
JOIN cohorts ON cohort_id = cohort.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;