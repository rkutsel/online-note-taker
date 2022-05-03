const fs = require("fs");

function writeToFile(note) {
  fs.writeFile("./db/db.json", JSON.stringify(note), (err) => {
    if (err) throw err;
    console.log("DB File Updated!");
  });
}

function readFromFile() {
  try {
    const data = fs.readFileSync("./db/db.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { writeToFile, readFromFile };
readFromFile();
