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
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("-----------------------------------");
    });
  }

  

    //     connection.query("SELECT * FROM bamazon.products", function(err, results) {
    //       if (err) throw err;
    //       // once you have the items, prompt the user for which they'd like to bid on
    //       inquirer
    //         .prompt([
    //           {
    //             name: "action",
    //             type: "input",
    //             message: " What is the id of the product you would like to buy?", 
    //             choices: function() {
    //               var choiceArray = [];
    //               for (var i = 0; i < results.length; i++) {
    //                 choiceArray.push(results[i].item_name);
    //               }
    //               return choiceArray;
    //             },
    //             message: "What is the id of the product you would like to buy?"
    //           },
    //           {
    //             name: "action",
    //             type: "input",
    //             message: "How many units of the product would you like to buy?"
    //           }
    //         ]) 
    //         .then(function(answer) {
    //             // get the information of the chosen item
    //             var chosenItem;
    //             for (var i = 0; i < results.length; i++) {
    //               if (results[i].item_name === answer.choice) {
    //                 chosenItem = results[i];
    //               }
    //             }
    //             console.log("thanks")
    //     })
    //     })
    // }