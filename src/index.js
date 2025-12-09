// Use "type: commonjs" in package.json to use CommonJS modules
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views','./views')

// Define your routes
require("../route/home")(app)
require("../db/dbconnect")(app)
require("../route/delnoticias")(app)
require("../route/getnoticias")(app)
require("../route/postnoticias")(app)
require("../route/putnoticias")(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
