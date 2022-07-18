const fs = require('fs');
// const book ={
//     title : "dance of dragons",
//     author : "George.R.R Martin",
// };

// let bookJSON = JSON.stringify(book);
// fs.writeFileSync("data.JSON", bookJSON);

// let dataBuffer = fs.readFileSync("data.json");
// let dataJSON = dataBuffer.toString();
// let data = JSON.parse(dataJSON);
// console.log(data.title);

// console.log(typeof(bookJSON));

// let parseData = JSON.parse(bookJSON);
// console.log(parseData);

let dataBuffer = fs.readFileSync("data.JSON");
let dataString = dataBuffer.toString();
let data = JSON.parse(dataString);
console.log(data);
data.name = "gurjeet";
data.age = 24;

console.log(data);
let userData = JSON.stringify(data);
fs.writeFileSync("data.JSON", userData);
