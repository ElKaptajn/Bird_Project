const express = require("express");
const app = express();

app.use(express.json());

const allTheBirds = ["Pigeon", "Duck", "Albatross"];

app.get("/birds", (req, res) => {
    res.send({ allTheBirds });
});

app.get("/birds/:id", (req, res) =>  {
    res.send({ id: req.params.id });
});


app.listen(8080);