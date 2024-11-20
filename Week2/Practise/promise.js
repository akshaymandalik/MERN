function preparingFood() {
  return new Promise(function (res, rej) {
    res("This is it");
    rej("sorry this order cant be fullfilled");
  });
}

function receptionist(data) {
  console.log(data);
}

preparingFood().then(
  function (result) {
    receptionist(result);
  },
  function (err) {
    receptionist(err);
  }
);

// Pending , Fullfilled, Rejected
