USE sakila;
SELECT * FROM film WHERE title LIKE '%ace%';
SELECT * FROM film WHERE description LIKE '%china';
SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord';
SELECT * FROM film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
SELECT * FROM film WHERE title LIKE '___gon%';
SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
SELECT * FROM payment WHERE rental_id IN (269, 239, 126, 399, 142) ORDER BY staff_id;
SELECT * FROM address WHERE district 
IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
SELECT * FROM address WHERE city_id BETWEEN 50 AND 120;
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;