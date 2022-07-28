(SELECT first_name, last_name FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name FROM sakila.staff);

(SELECT DISTINCT first_name FROM sakila.customer WHERE first_name LIKE '%tracy%')
UNION ALL
(SELECT DISTINCT first_name FROM sakila.actor WHERE first_name LIKE '%je%');

(SELECT DISTINCT first_name FROM sakila.actor ORDER BY first_name DESC LIMIT 5)
UNION ALL
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION ALL
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 14)
ORDER BY first_name;

(SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.customer)
UNION ALL
(SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.actor)
ORDER BY full_name
LIMIT 60 OFFSET 45;