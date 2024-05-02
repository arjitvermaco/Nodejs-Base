import http from "node:http"
import fs from "node:fs"

const homepage = fs.readFileSync('./html/index.html')
const aboutpage = fs.readFileSync('./html/about.html')
const errorpage = fs.readFileSync('./html/404.html')


const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === "/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }

    if(url === "/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(aboutpage)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(errorpage)
        res.end()
    }
})

server.listen(5500)