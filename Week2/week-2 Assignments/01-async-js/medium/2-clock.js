
setInterval(() => {
    
    console.clear();
    let date = new Date();
    let flag = 'PM';
    console.log(date.getHours());
    if (date.getHours() <=12) {
        flag = "AM"
        console.log(flag);
    }
    
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()+" "+ flag);
    
},1000);