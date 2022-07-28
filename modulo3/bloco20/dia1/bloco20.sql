USE sakila;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password, last_update)
VALUES ('Heitor', 'Cândido', 2, 'heitor2000costa@gmail.com', 1, 1, 'Hekthor', 'oreidelas123', NOW());

INSERT INTO staff (
	first_name, 
	last_name, 
    address_id, 
	email, 
	store_id, 
	active, 
	username, 
	password, 
	last_update)
    VALUES 
    ('Bob', 'Esponja', '3', 'bob_esponja@siricascudo.com', 1, 1, 'Bob', 'hamburgui32', NOW()),
    ('Bruce', 'Wayne', 232, 'wayne_batman@yahoo.com.br', 2, 1, 'Batman', 'naoSouoBatman6', NOW());
    
INSERT INTO actor (first_name, last_name)
	SELECT customer.first_name, customer.last_name
    FROM customer LIMIT 5;
    
INSERT INTO category (name)
VALUES ('Adventure'), ('Boring'), ('Nice');

INSERT INTO store (manager_staff_id, address_id) VALUES (5, 87);
    
    