const http = require("http");
http.createServer((request,response)=>{
 response.end('<h1>Hello Node!!!!</h1>\n');

}).listen(3000);

const task = require("fs");
task.readFile("./welcome.txt" , (err,data)=>{

    if (err)  { return console.log(err);}
     { console.log(data.toString())};

})