const crypto = require("crypto");
const fileDb = require("../fsdb");
const apiRoute = require("express").Router();

apiRoute.get("/notes", (req, res) => {
  res.status(200).json(fileDb.readFromFile());
});

apiRoute.post("/notes", (req, res) => {
  let localDb = fileDb.readFromFile();
  console.info(`${req.method} Request to add a note received!`);
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
    res.status(500).json("Error: could not add the note");
  }
});

apiRoute.delete("/notes/:uuid", (req, res) => {
  let localDb = fileDb.readFromFile();
  const uuid = req.params.uuid;
  localDb = localDb.filter((element) => element.uuid !== uuid);
  if (localDb) {
    fileDb.writeToFile(localDb);
    res.status(201).json(req.params.uuid);
  } else {
    res.status(500).json("Error: could not delete the note");
  }
});

module.exports = apiRoute;
