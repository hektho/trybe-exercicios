USE sakila;
SELECT count(*) FROM payment WHERE DATE(payment_date) = '2005-05-25';
SELECT count(*) FROM payment WHERE payment_date LIKE '2005-05-25%';

SELECT COUNT(*) AS total_payment FROM payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT 
DATE(rental_date) AS data, 
YEAR(rental_date) AS ano,
MONTH(rental_date) AS mês,
DAY(rental_date) AS dia,
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo
FROM rental 
WHERE rental_id = 10330;

SELECT * FROM payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= '22' ORDER BY payment_date;