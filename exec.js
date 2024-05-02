import {exec} from 'node:child_process'

// exec('git status',(err,out)=>{
//     if(err) {
//         throw err
//     }
//     console.log()
// })

exec('create_dir.bat',(err,out,stderr)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(out)
})