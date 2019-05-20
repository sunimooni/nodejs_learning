
var fs = require("fs");

var data = fs.readFileSync('README.txt');

console.log(data.toString());

console.log("end");
