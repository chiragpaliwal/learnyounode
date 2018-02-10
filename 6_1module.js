var fs = require('fs');
var path = require('path');

module.exports = function(dirname, fileExt, callback){
    fs.readdir(dirname, function(err, list){
        if(err){
            callback(err, null);
        }else{
            result=[];
            for(var i=0; i<list.length; i++){
                if(path.extname(list[i]) == fileExt){
                    result.push(list[i]);
                }
            }
            callback(null, result);
        }
    });
}
