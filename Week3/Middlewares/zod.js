const express = require("express");
const zod = require("zod");
const inputSchema = zod.array(zod.number());
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = inputSchema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.listen(3000);
