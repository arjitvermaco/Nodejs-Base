import express from "express";
import { people } from "./data.js";
import {
  addPeople,
  addUser,
  deleteUser,
  editPerson,
} from "./app/controllers.js";
const app = express();

app.use(express.json());

//GET , POST , PUT , DELETE
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/postman/people", addUser);

app.post("/api/people", addPeople);

app.put("/api/peope/:id", editPerson);

app.delete("/api/people/:id", deleteUser);

app.listen(5500, () => {
  console.log("Listning server on PORT 5500....");
});
