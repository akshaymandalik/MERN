/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let outputArray = [];
  
  for (let iCnt = 0; iCnt < transactions.length;iCnt++){
    if (!outputArray.find(({category})=>category === transactions[iCnt].category)) {
      outputArray.push({category:transactions[iCnt].category,totalSpent:transactions[iCnt].price})
    }
    else {
      
      const obj = outputArray.find(
        (obj) => obj["category"] === transactions[iCnt].category
      );
      if (obj) {
        obj.totalSpent = obj.totalSpent + transactions[iCnt].price;
      }
    }
  }
  return outputArray;
  
}

// let outputArray = calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656076800000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
// ]);

// console.log(outputArray);

module.exports = calculateTotalSpentByCategory;
