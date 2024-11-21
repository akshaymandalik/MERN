const express = require("express");
const app = express();

app.use(express.json()); // MiddleWare

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.json({ msg: `Your kidney length is ${kidneyLength}` });
});

// Global Catches

app.use((err, req, res, next) => {
  res.json({
    err: "Something went wrong!!",
  });
});

app.listen(3000);
