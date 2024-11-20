const user = '{"name":"Akshay","age":21}';

const user1 = JSON.parse(user);
console.log(user1);

const user2 = JSON.stringify(user1);
console.log(user2);