USE Scientists;
SELECT * FROM Scientists WHERE name LIKE '%e%';
SELECT * FROM Projects WHERE code LIKE 'A%' ORDER BY name;
SELECT code, name FROM Projects WHERE code LIKE '%3%' ORDER BY name;
SELECT scientist FROM AssignedTo WHERE project IN ('AeH3', 'Ast3', 'Che1'); 
SELECT * FROM Projects WHERE hours > 500;
SELECT * FROM Projects WHERE hours BETWEEN 250 AND 800;
SELECT * FROM Projects WHERE code NOT LIKE 'A%';
SELECT name FROM Projects WHERE code LIKE '%H%';