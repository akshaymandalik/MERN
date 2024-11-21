const express = require("express");
const app = express();

function userMiddleWare(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "Akshay" || password != "pass") {
    res.status(400).json({
      msg: "User doesn't exists",
    });
  } else {
    next();
  }
}

function kidneyMiddleWare(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Wrong Inputs!!",
    });
  } else {
    next();
  }
}
app.get("/health-checkup", userMiddleWare, kidneyMiddleWare, (req, res) => {
  //   if (username != "Akshay" || password != "pass") {
  //     res.status(400).json({
  //       msg: "User doesn't exists",
  //     });
  //     return;
  //   }

  //   console.log(kidneyId);

  //   if (kidneyId != 1 && kidneyId != 2) {
  //     res.status(400).json({
  //       msg: "Wrong inputs",
  //     });
  //     return;
  //   }

  res.send("Your heart is healthy");
});

app.listen(3000, () => {
  console.log("Server is Running..");
});
