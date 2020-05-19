const express = require("express");
const app = express();
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const port = 3000;
const db = require("./db/index");
const router = require("./routes/index");

//morgan
app.use(morgan("tiny"));
//styles en la carpeta public
app.use(express.static("public"));
//Config Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//nunjucks
app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views", { noCache: true });

app.use("/", router);

db.sync({ force: true }).then(() => {
  app.listen(port);
  console.log("escuchando en el puerto " + port);
});
