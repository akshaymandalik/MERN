const fs = require('fs');

let someData = "";

const content = fs.readFileSync('./demo.txt', 'utf-8');

someData = content.split(' ').filter(word => word !== '').join(' ');

fs.writeFile('./demo.txt', someData, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File Cleaned Successfully");
    }
});

