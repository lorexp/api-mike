const express = require("express");
const cors = require("cors");
require("./models");

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/index"));

app.listen(80, "0.0.0.0", () => {
  console.log("listening...");
});
