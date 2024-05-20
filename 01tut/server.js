const os = require("os");
const path = require("path");

const { add, subtract, multiply, divide } = require("./math");

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// // Equivalent to __dirname
// console.log(path.dirname(__filename));

// // server.js
// console.log(path.basename(__filename));

// // .js
// console.log(path.extname(__filename));

// // Most useful: object with all of these values
// console.log(path.parse(__filename));
