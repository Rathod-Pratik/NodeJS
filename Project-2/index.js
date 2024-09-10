const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end(); // ignore favicon requests

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("data.txt", `url is ${req.url} \n`, (error) => {
        if (error) {
            res.end("Error writing to file");
            return;
        }

        switch (myUrl.pathname) {
            case '/':
                res.end("This is home page");
                break;
            case '/contect-us':
                res.end("This is contact page");
                break;
            case '/search':
                const search = myUrl.query.searchitem;
                res.end(`Your searched item is ${search}`);
                break;
            case '/project':
                const name = myUrl.query.name;
                res.end(`Hi, ${name}`);
                break;
            default:
                res.end("Enter proper url");
        }
    });
});

server.listen(8000, () => console.log("Server is running on port 8000"));
