import fs from "node:fs";
// const fs = require("fs")
 
// fs.readdir('./assets',(err,files)=>{
//     if(err){
//         console.error(err)
//     }
//     console.log(files)
// })

// console.log("Reading The Directory!!")

// const data = fs.readFileSync('./assets/test.txt','utf-8')
// console.log(data)

function renameFile(){
    fs.rename('./assets/test.txt','./assets/test2.txt',(err)=>{
        if(err) console.log(err)
        else console.log("Operation Complete")
    })
}

// renameFile()


function appendToFile(){
    fs.appendFile('./assets/test2.txt','\n This is another para',(err)=>{
        if (err) console.log(err);
        else console.log('Append operation complete.');
    })
}
appendToFile()

function deleteFile(){
    fs.unlink('./assets/temp.txt',(err)=>{
        if(err) console.log(err)
        console.log("File Deleted!!")
    })
}

deleteFile()