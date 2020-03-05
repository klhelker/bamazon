# Bamazon 
 
### Author:

### Kristin Helker

This app creates an Amazon-like storefront using MySql. The app will take in orders from customers and deplete stock from the store's inventory. 
save and require the MySQL and Inquirer npm packages for data input and storage.

To see a video preview of the app click on the link below:


   [https://drive.google.com/file/d/1Zvq1oRbHzYXFEa2HK_dtKuMYyZUhkma2/view]

open in terminal node.js <-filename-> and a products table will be shown including each of the following columns:


    * item_id (unique id for each product)

    * product_name (Name of product)

    * department_name

    * price (cost to customer)

    * stock_quantity (how much of the product is available in stores)


The app will prompt users with two messages:

   * The first asks for the product name of what they would like to buy.
   * The second message asks how many units of the product they would like to buy.

Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request. If not, the app will ask if you would like to start again or end or if there is enough of the product, the customer's order will be filled.
 
Following this reponse:
   *  The SQL database will update to reflect the remaining quantity.
   *  Once the update goes through, the total cost of customer's purchase will be displayed
