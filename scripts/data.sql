-- Inserccion de datos en tabla Product

INSERT INTO `pruebadb`.`client`
(`idclient`,
`name`,
`last_name`,
`phone`)
VALUES
(DEFAULT,
"Ximena",
"Largo",
"555555555"),
(DEFAULT,
"Pedro",
"Perez",
"123456789"),
(DEFAULT,
"Juan",
"Rodriguez",
"987654321"),
(DEFAULT,
"Maria",
"Soto",
"290484948"),
(DEFAULT,
"Carlos",
"Alvarez",
"93784620");

-- Inserccion de datos en tabla Product

INSERT INTO `pruebadb`.`product`
(`idproduct`,
`name`,
`price`,
`description`)
VALUES
(DEFAULT,
"Televisor LG",
500000.0,
"Pantalla led 35 pulgadas curvo"),
(DEFAULT,
"Nevera Samsung",
2500000.0,
"Nevera 377L no frost"),
(DEFAULT,
"Computador portatil Acer",
1500000.0,
"Pantalla 17 pulgadas, SO windows 11, Procesador AMD Ryzen 5600"),
(DEFAULT,
"Headset Logitech",
600000.0,
"Headset inalambrico con anulacion de ruido"),
(DEFAULT,
"Pantalla curva Samsung",
3500000.0,
"Monitor de 32 pulgadas curva led");

-- Inserccion de datos en tabla shopping_cart

INSERT INTO `pruebadb`.`shopping_cart`
(`id`,
`client_idclient`,
`product_idproduct`,
`shopping_date`)
VALUES
(DEFAULT,
1,
3,
"2023-12-23"),
(DEFAULT,
3,
1,
"2024-01-18"),
(DEFAULT,
2,
1,
"2024-02-29"),
(DEFAULT,
2,
1,
"2024-02-29"),
(DEFAULT,
2,
1,
"2024-02-29");

-- Consultas de datos

SELECT sc.id, concat(c.name," ", c.last_name) AS cliente, p.name AS producto, p.price AS precio, sc.shopping_date AS fecha_compra FROM `pruebadb`.`shopping_cart` sc
INNER JOIN `pruebadb`.`client` c ON c.idclient = sc.client_idclient
INNER JOIN `pruebadb`.`product` p ON p.idproduct = sc.product_idproduct;

SELECT idproduct, name, 
CASE
	WHEN price > 500000.0 THEN 'El precio es mayor a 500000.0'
    ELSE 'El precio es menor a 500000.0'
END AS precio
FROM `pruebadb`.`product`


