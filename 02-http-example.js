import http from "node:http";


const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === "/"){
        res.writeHead(200,{'context-type':'text/html'})
        res.write("<h1>Welcome to my homepage")
        res.end()
    }

    if(url === "/about"){
        res.writeHead(200,{'context-type':'text/html'})
        res.write("<h1>About Page</h1>")
        res.end()
    }
    else{
        res.writeHead(404,{'context-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }

})

server.listen(5500)