const express = require("express");
const app = express();

app.use(express.json());

const allTheBirds = [{name: "Pigeon", id: 1}, {name: "Duck", id: 2}, {name: "Albatross", id: 3}];

app.get("/birds", (req, res) => {
    res.send({ allTheBirds });
});

app.get("/birds/:id", (req, res) =>  {
    const id = parseInt(req.params.id);
    const bird = allTheBirds.find((bird) => bird.id === id);
    if(!bird){
        res.send( {message: "Bird with the id of " + id + " wasn't found."} )
    } else {
        res.send(bird);
    }
});


app.listen(8080);