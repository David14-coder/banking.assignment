// const day = 'friday';

// switch(day) {
//     case 'monday':
//     console.log('plan course structure');
//     console.log('go to coding meetup');
//     break;
//     case 'tuesday':
//     console.log('prepare theory videos');
//     break;
//     case 'wednesday':
//     case 'thursday':
//     console.log('write code examples');
//     break;
//     case 'friday':
//     console.log('record videos');
//     break;
//     case 'saturday':
//     case 'sunday':
//     console.log('enjoy the weekend :D');
//     break;
//     default:
//     console.log('not a valid day!');
// }


// if (23 > 10) {
//     const str = '23 is bigger';
// }

// const me = 'am turning 57 by may';
// console.log(`i'm ${2046 - 1990} years old ${me}`)

// const age = 13;
// age  >= 16 ? console.log('i like to drink wine') :
// console.log('i like to drink water');

// const age = 15;
// // age <= 18 ? console.log('i like to drink wine') : console.log('i like to drink wine');


// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age <= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);

// let num1 = 10;
// let num2 = 5;
// let operator = "*";

// let result = 
//  operator === "+"
//  ? num1 + num2
//  : operator === "-"
//  ? num1 - num2
//  :operator === "*"
//  ? num1 * num2
//  : operator === "/"
//  ? num1 / num2
//  : "invalid operator";

//  console.log(result);

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// // let total = bill + tip;

// console.log(`the bill was ${bill} , the tip was ${tip}, and the total was ${bill + tip}`);

// function greet(name) {
//     console.log("Hello" + name);
// }
// greet("David");

// function add(a, b) {
//     console.log(a * b);
// }
// add(2, 0.567);

// function calculateTip(bill) {
//     return bill >= 50 && bill <= 300
//     ? bill * 0.15
//     : bill * 0.20;
// } 
// console.log(calculateTip(275));

// function add(a, b) {
//     return a + b;
// }

// let result = add(200, 1, 67);
// console.log(result);


// let password;

// do {
//     password = prompt("Enter your password");
// } while (password !== "1234");

// console.log("Login successful");

// let products = [
//     "Laptop",
//     "Phone",
//     "Mouse",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
//     "Keyboard",
// ];


//  for (let emeka of products) {
//     console.log(emeka);
// }


// let scores = [80, 45, 70, 30, 90];

// for (let score of scores) {
//     if (score >= 50) {
//         console.log(score + "- passed");
//     } else {
//         console.log(score + "- failed");
//     }
// }

// let cartPrices = [5000, 2000, 15000, 3000]; 

// let total = 0;

// for (let price of cartPrices) {
//     total = total + price;
// }

// console.log("total: $" + total);


// let transactions = ["success", "succcess", "failed", "success", "failed"];

// let failedTransactions = 0;

// for (let transaction of transactions) {
//     if (transactions === "failed"){
//         failedTransactions++;
//     }
// }

// console.log("failed transactions:" + failedTransactions);



// let users =["victor", "david", "divine", "john", "henry", "florence"];

// for (let user of users) {
//     console.log("welcome" + user);
// }

// let prices = [2500, 5000, 1200, 7000, 3000];

// for (let price of prices){
//     total = toal + prices;
//     console.log("total: $" + price);
// }


// let transaction = 5000;

// do {
//     transaction = prompt(`
//        check balance
//        deposit money
//        withdrawal money
//        view transactions
//        exit 
//        `);
// }