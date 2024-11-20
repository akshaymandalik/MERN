let some = false;
function preparingFood() {
  return new Promise(function (res, rej) {
    if (some == true) {
      res("This is it");
    } else {
      rej("sorry this order cant be fullfilled");
    }
  });
}

async function receptionist() {
  try {
    const value = await preparingFood();
    console.log(value);
  } catch (e) {
    console.log("Error: ", e);
  }
}

receptionist();
