users(<u>id</u>, email, login, password, firstName, lastName, address, postCode, city, country, phone, registerDate)

products(<u>id</u>, name, image, description, size, price, addDate)

orders(<u>id</u>, **FK_userId**, date, trackingNumber, address, postCode, city, country)

ordersProducts(<u>**FK_order**</u>, <u>**FK_product**</u>, unitPrice, quantity)

'1', 'emma@emma.fr', '', '00a809937eddc44521da9521269e75c6', 'Emma', 'LeMatelas', '', '', '', '', NULL, ''
