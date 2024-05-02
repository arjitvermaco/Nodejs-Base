import fs from "node:fs";
const content = "Hello, this is content of new file!";

// fs.writeFile("test.txt", content, (err) => {
//   if (err) {
//     console.err(err);
//     return;
//   }
//   console.log("File Created and saved");
// });

fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Data from file:",data)
})