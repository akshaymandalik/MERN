const fs = require('fs');

fs.readFile('./Hello.txt','utf-8' ,function (err,data) {

    
    console.log(data);
    
});

for (let iCnt = 0; iCnt < 10000000000000000;iCnt++){

}