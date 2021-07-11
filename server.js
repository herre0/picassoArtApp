const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors());

const db = require("./src/app/server/models");

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist/picassoApp'));

// routes
require('./src/app/server/routes/auth.routes')(app);
require('./src/app/server/routes/user.routes')(app);
require('./src/app/server/routes/admin.routes')(app);
require('./src/app/server/routes/file.routes')(app);
require('./src/app/server/routes/regular.routes')(app);
require('./src/app/server/routes/general.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

  // simple route


