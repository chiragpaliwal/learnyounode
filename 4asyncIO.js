var fs = require('fs');

fs.readFile(process.argv[2],'utf8', function(err, fileContent){
    console.log(fileContent.split('\n').length-1);
});