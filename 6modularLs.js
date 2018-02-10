var modularLs = require('./6_1module');

var dirname = process.argv[2];
var fileExt = process.argv[3]

modularLs(dirname, fileExt, function(err, files){
    for (i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});