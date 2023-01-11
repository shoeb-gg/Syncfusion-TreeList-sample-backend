const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const dataRoute = require("./routes/data");

app.use(
  bodyParser.json(),
  cors({
    origin: "*",
  })
);
app.use("/api/data", dataRoute);

const port = 4000;
app.listen(port, () => console.log(`Server is running at port:${port}`));
