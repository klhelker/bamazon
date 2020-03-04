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

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    queryAllItems();
    
  });
  
  function queryAllItems() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // for (var i = 0; i < res.length; i++) {
      //   console.log("item id = " + res[i].item_id + " | " + "product name = " + res[i].product_name + " | " + "department name = " + res[i].department_name + " | " + "price = $ " + res[i].price + " | " + "quantity = " + res[i].stock_quantity);
      // }
      console.table(res)
      console.log("-----------------------------------");
      itemId(res);
    });
    
    // quantity();
  }

function itemId(results) {
            
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            console.log(choiceArray);
//   // query the database for all items being auctioned
//   connection.query("SELECT * FROM products", function(err, results) {
//     if (err) throw err;
   inquirer
      .prompt([
        {
          name: "productName",
          type: "list",
          choices: choiceArray,
          message: "What is the item_id of the product you would like?"

          },
          {
            name: "quantity",
            type: "number",
            message: "What quantity of the item you would like to buy?"

          }
        
        ])
        
        .then(function(answer) {

          console.log(answer)
          for(var i = 0; i < results.length; i++){
              if (answer.productName === results[i].product_name){

                  console.log(results[i]);
              }
          }

          });
    }
    function quantity() {
      //   // query the database for all items being auctioned
      //   connection.query("SELECT * FROM products", function(err, results) {
      //     if (err) throw err;
         inquirer
            .prompt([
              {
                name: "quantity",
                type: "list",
                choices: function() {
                  var choiceArray = [];
                  for (var i = 0; i < results.length; i++) {
                    choiceArray.push(results[i].stock_quantity);
                  }
                  return choiceArray;
                },
                message: "What is the quantity of the item you would like?"
              }
              .then(function(answer) {
                var query = "SELECT * FROM products";
                connection.query(query, {quantity: answer.stock_quantity}, function(err, res) {
                  for (var i = 0; i < res.length; i++) {
                    console.log("you chose: " + res[i].stock_quantity);
                  }
                
                })
              })
            ])
          }
    
          
  