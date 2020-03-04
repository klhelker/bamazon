var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "matthew12",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected");
  queryAllItems();

});

function queryAllItems() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // for (var i = 0; i < res.length; i++) {
    //   console.log("item id = " + res[i].item_id + " | " + "product name = " + res[i].product_name + " | " + "department name = " + res[i].department_name + " | " + "price = $ " + res[i].price + " | " + "quantity = " + res[i].stock_quantity);
    // }
    console.table(res)
    console.log("-----------------------------------");
    productName(res);
  });

  // quantity();
}

function productName(results) {

  var choiceArray = [];
  for (var i = 0; i < results.length; i++) {
    choiceArray.push(results[i].product_name);
  }
  // console.log(choiceArray);

  inquirer
    .prompt([
      {
        name: "productName",
        type: "list",
        choices: choiceArray,
        message: "What is the name of the product you would like?"

      },
      {
        name: "quantity",
        type: "number",
        message: "What quantity of the item you would like to buy?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
           return false;
        }

      }

    ])

    .then(function (answer) {

      console.log(answer)
      for (var i = 0; i < results.length; i++) {
        if (answer.productName === results[i].product_name) {

          // console.log(results[i]);
          var a = results[i];
          
          
        }

      }

      if (answer.quantity <= a.stock_quantity) {

        var newQuantity = a.stock_quantity - answer.quantity

        connection.query("UPDATE products SET ? WHERE ?",[
          {
           stock_quantity: newQuantity

          },
          {
            product_name: a.product_name 

          }

      ], function (err, res) {
          if (err) throw err;
        console.log("Great, we have the amount needed, your total is $" + answer.quantity * a.price)
        startAgain();
       })
      }
      // else (answer.quantity > results[i].stock_quantity){
      else {
        // queryAllItems()
        console.log("you will need to pick another amount, we do not currently have the quantity in stock")
        startAgain()
      }


    })

}
// function which prompts the user for what action they should take

function startAgain() {
  inquirer
    .prompt({
      name: "chooseAgain",
      type: "list",
      message: "Would you like to choose another item?",
      choices: ["Yes!", "No!"] 
      
    })
    .then(function(answer) {
     
      if (answer.chooseAgain === "Yes!") {
        queryAllItems();
      }
      else if (answer.chooseAgain === "No") {
        connection.end();
      } 
    
    });
}