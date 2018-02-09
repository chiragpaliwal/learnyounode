var fs = require('fs');

fileBuffer = fs.readFileSync(process.argv[2]);
file = fileBuffer.toString();

var count = file.split('\n');

console.log(count.length-1);

