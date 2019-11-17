var orm = require("./config/orm");
var express = require("express");

//var PORT = process.env.PORT || 8080;

//var app = express();

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));

// Parse application body as JSON
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

let printStuff = function(result)
{
    console.log("-----------------------");
    console.log(result);
}

// Set Handlebars.
//var exphbs = require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

//orm.insertOne("burgers", "burger_name", "devoured", "pizza burger", false, printStuff);
//orm.selectAll("burgers", printStuff);
//orm.updateOne("burgers", "devoured", true, "id", "4", printStuff);
//orm.deleteOne("burgers", "burger_name", "pizza burger", printStuff);

// Start our server so that it can begin listening to client requests.
//app.listen(PORT, function()
//{
  // Log (server-side) when our server has started
  //console.log("Server listening on: http://localhost:" + PORT);
//});


