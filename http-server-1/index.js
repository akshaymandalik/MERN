const express = require("express");
const bodyParser = require("body-parser");
const app = express();


const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("<center><h1>Core Microsystem</h1><center>");
});
app.get("/about", (req, res) => {
    res.json({
        "name": "Akshay",
        "age": 23,
        "gender": "Male"
    });
});
app.post("/conversation", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log("Server is listening on",port);
});