import os from 'node:os'

console.log("You have ", os.freemem() ,"Byts of mem")

console.log("Home Dir", os.homedir())
// This method is used to returns the hostname of the operating system.
console.log("Host Name: ", os.hostname()); 

console.log("Platform: ", os.platform());  

// This method returns the operating system release.
console.log("Release: ", os.release());  

console.log("Release: ", os.uptime());  
console.log("Architecture: ",os.arch()); 
console.log("CPUs: \n",os.cpus());  
