import fs from "node:fs";

 //-----------------
// Blocking Code
//-----------------

var data = fs.readFileSync('test.txt');  
console.log(data.toString());  
console.log("Program Ended!");   


//---------------------
// Non Blocking Code
//---------------------
fs.readFile('test.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString());  
});  
console.log("Program Ended!!");  