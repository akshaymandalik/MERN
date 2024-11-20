const fs = require('fs');

someData = "Hii, Welcome to programming guy!!";

fs.writeFile('./Hello.txt', someData, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Data written successfully!!");
    }
});