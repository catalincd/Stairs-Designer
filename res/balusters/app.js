//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    var str = [];
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        str.push(file.split('.')[0]);
    });

    console.log(str);
});