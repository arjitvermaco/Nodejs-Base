import http from "node:http";

const server = http.createServer((req, res) => {
  // console.log("Requested URL",req.url)
  // res.end("<h1>Welcome to my http server</h1>")

  if (req.url === "/") {
    res.end("Welcome to out homepage!!");
  }

  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`
    <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>`);
});

server.listen(5500);
