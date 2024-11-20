// Creating a http server using express which is a external library.
// Use: npm install express
// Initialize the project using: npm init

const e = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const users = [{ name: "John", kidneys: [{ healthy: true }] }];

app.get("/", function (req, res) {
  const patientKidneys = users[0].kidneys;
  const noOfKidneys = patientKidneys.length;
  const noOfHealthyKidneys = patientKidneys.filter(
    (patientKidneys) => patientKidneys.healthy == true
  ).length;
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const patientKidneys = users[0].kidneys;
  const noofkidneys = patientKidneys.length;
  let returnMessage;
  if (noofkidneys == 2) {
    returnMessage = "You have reached the maximum amount of kidneys";
  } else {
    let isHealthy = req.body.isHealthy;
    patientKidneys.push({
      healthy: isHealthy,
    });

    returnMessage = "Operation Successfull, your new kidney is attached!!";
  }
  res.json({
    returnMessage,
  });
});

app.put("/", (req, res) => {
  let patientKidneys = users[0].kidneys;
  let returnMessage;

  patientKidneys = patientKidneys.filter(
    (patientKidneys) => patientKidneys.healthy == true
  );
  if (patientKidneys.length == users[0].kidneys.length) {
    returnMessage = "You already have 2 Healthy kidneys!!";
  } else {
    for (let iCnt = 0; iCnt < users[0].kidneys.length; iCnt++) {
      users[0].kidneys[iCnt].healthy = true;
	}
	  returnMessage="Operation Successfull, your kidneys replaced!"
  }

  res.json({returnMessage});
});
app.delete("/", function (req, res) {
  const patientKidneys = users[0].kidneys;
  let returnMessage;
  if (patientKidneys.length <= 0) {
    returnMessage = "You have no Kidneys to remove!!";
  } else {
    users[0].kidneys = patientKidneys.filter(
      (patientKidneys) => patientKidneys.healthy == true
    );
    returnMessage = "Operation successfull, your unhealthy kidneys removed!!";
  }

  res.json({ returnMessage });
});

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
