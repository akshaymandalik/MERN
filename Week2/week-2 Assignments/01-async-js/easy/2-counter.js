function counter() {
    setTimeout(() => {

        console.clear();
        let date = new Date();
        console.log(
            date.getHours() +
            ": " +
            date.getMinutes() +
            ": " +
            date.getSeconds()
        );
        
        counter();

    }, 1000);
}

counter();


