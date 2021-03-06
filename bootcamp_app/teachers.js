const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const queryString = `
  SELECT teachers.id as teacher_id, teachers.name as name, cohorts.name as cohort
  FROM teachers
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

const values = [`${process.argv[2]}%`, process.argv[3] || 5];

pool.query(`
SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher.id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});