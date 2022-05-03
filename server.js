const express = require("express");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json");
const fileDb = require("./fsdb");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.status(200).json(fileDb.readFromFile());
});

app.post("/api/notes", (req, res) => {
  let localDb = fileDb.readFromFile();
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      uuid: crypto.randomUUID(),
    };

    localDb.push(newNote);
    console.log(localDb);

    fileDb.writeToFile(localDb);

    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error posting note");
  }
});

app.delete("/api/notes/:uuid", (req, res) => {
  let localDb = fileDb.readFromFile();
  const uuid = req.params.uuid;
  localDb = localDb.filter((element) => element.uuid !== uuid);
  if (localDb) {
    fileDb.writeToFile(localDb);
    res.status(201).json(req.params.uuid);
  } else {
    res.status(500).json("Error posting note");
  }
});

app.get("*", (req, res) => {
  res.send("<b> 404 Requested Page Could Not Be Found!");
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
