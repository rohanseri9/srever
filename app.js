// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const server = http.createServer(function(req,res){
//     res.writeHead(20,{ 'content-type':'text/html'})
//     fs.readFile('index.html', function(error,data){
//         if(error){
//             res.writeHead(404)
//             res.write('error:file not found')
//         }else{
//             res.write(data)
//         }
//         res.end()
//     })
// })
// server.listen(port, function(error){
//     if(error){
//         console.log('someting went wrong',error)
//     }else{
//         console.log('server is listening on port'+ port)
//     }
// })


var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('hello user');
}).listen (8081);
console.log ("Server running at http://127.0.0.1:8081/");   