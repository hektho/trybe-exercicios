SELECT cus.first_name, cus.email, ad.address_id, ad.address, ad.district
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ad
ON ad.address_id = cus.address_id
WHERE district = 'California' AND first_name LIKE '%rene%';

SELECT s.first_name, s.last_name, AVG(pay.amount)
FROM sakila.staff AS s
INNER JOIN sakila.payment as pay
ON s.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT fact.actor_id, act.first_name, fact.film_id, f.title
FROM sakila.actor AS act
INNER JOIN sakila.film AS f
INNER JOIN sakila.film_actor AS fact
ON fact.actor_id  = act.actor_id AND fact.film_id = f.film_id;

