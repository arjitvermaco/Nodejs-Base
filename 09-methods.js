import express from "express";
import { people } from "./data.js";
const app = express();

app.use(express.json());

//GET , POST , PUT , DELETE
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/postman/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    res.send(400).json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, person: name });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    res.send(400).json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, person: name });
});

app.put("/api/peope/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  return res.status(201).json({ success: true, data: newPeople });
});


app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })
  

app.listen(5500, () => {
  console.log("Listning server on PORT 5500....");
});
