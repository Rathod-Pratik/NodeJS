const  http=require('http');
const fs =require('fs');

const server=http.createServer((req,res)=>{
    if (req.url === "/favicon.ico") return res.end();
    fs.appendFile("data.txt",`url is ${req.url} \n`,(error,data)=>
        {

        switch(req.url){
            case '/': res.end("This is home page");
            break;
            case '/contect-us': res.end("This is contect page");
            break;
            case '/project': res.end("This is project page");
            break;
            default: res.end("Enter proper url")
        }
    })
});
server.listen(8000,()=>console.log("Successful conntect"))
