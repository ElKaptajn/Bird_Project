const express = require("express");
const app = express();

app.use(express.json());

app.get("/birds", (req, res) => {
    res.send({ message: "List of birds" });
});

app.get("/birds/:birdName", (req, res) =>  {
    res.send({ birdName: req.params.birdName });
});


app.listen(8080);