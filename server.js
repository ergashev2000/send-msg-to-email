const express = require("express");
require("dotenv").config();

const cors = require("cors");

const appRoute = require("./routes/route.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working!");
});

/** routes */
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
