// Use "type: commonjs" in package.json to use CommonJS modules
const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Define your routes
require("../route/home")(app)
require("../db/dbconnect")(app)
require("../route/delnoticias")(app)
require("../route/getnoticias")(app)
require("../route/postnoticias")(app)
require("../route/putnoticias")(app)
require("../route/getidnoticias")(app)
require("../route/gettiponoticias")(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});