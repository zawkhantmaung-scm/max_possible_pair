const max_possible_pair = require("max_possible_pair");

let data, max, key;

// data = [
//   { id: 1, item: "Shirt", price: 16000 },
//   { id: 2, item: "Jean Trousers", price: 25000 },
//   { id: 3, item: "Gold", price: 200000 },
//   { id: 4, item: "Guitar", price: 60000 },
//   { id: 5, item: "Smart Phone", price: 150000 },
//   { id: 6, item: "Watch", price: 120000 },
//   { id: 7, item: "Shoes", price: 45000 },
//   { id: 8, item: "Belt", price: 65000 },
// ];
// max = process.argv.slice(2)[0];
// key = 'price';

data = [1, 2, 3];
max = process.argv.slice(2)[0];

const resp = max_possible_pair(data, max, key);

console.log(resp);
