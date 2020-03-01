    use bamazon;

    create table products (
	
 
   id INTEGER NOT NULL AUTO_INCREMENT,
   
   item_id INT NULL, 

   product_name VARCHAR (50) NULL,

   department_name VARCHAR (100) NULL, 

   price DECIMAL (10,2) NULL,

   stock_quantity INT (100) NULL,
   
   PRIMARY KEY (id)
);


        INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
        VALUES (365, "Swing", "Kids/Toys", 50.00, 100), (221, "Television", "Electronics", 600.00, 120), (35, "Camera", "Electronics", 435.00, 75), (56, "Diamond ring", "Jewelry", 1500.00, 50), (2, "Super Nintendo", "Gaming equipment", 155.00, 10), (19, "Paint", "Art Supplies", 20.00, 500), (88, "Trampoline", "Kids/Toys", 250.00, 50), (458, "Kitchenaid Mixer", "Kitchen", 300.00, 20), (34, "Plants", "Home & Garden", 35.00, 100), (10, "Stove-top", "Kitchen", 1305.50, 20);
 
