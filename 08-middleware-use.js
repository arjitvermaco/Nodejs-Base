import express from "express";
import logger from "./middlewares/logger.js";
const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.listen(5500, () => {
  console.log("Server is listening on port 5500....");
});
