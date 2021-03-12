const express = require('express');
const exphbs = require('express-handlebars');
var routes = require("./controllers/burgers_controller.js");


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
  });
  
