// const http = require('http');
// const fs = require('fs');

// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url} New Request Recieved\n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(req.url){
//             case '/': res.end("HomePage");
//             break;

//             case '/about': res.end("Welcome to the About page");
//             break;

//             default: res.end("404 Not Found");
//         }
        //esa krne se / ke baad hum about ya kuch bi lagake uss page ko search kr skte and uske hisab se hume response milega
        //this is called a multi route (multipages)
    // res.end("Hello from Server");                 //jab log hojaega tbi user ko response send hoga
//     })
// });

// myServer.listen(9000, () => console.log('Server Started!'));
//2 br isliye ari coz browser ek extra call krta hai 
//hum path bi de skte hai log file m (about) / ke baad jo bi likhenge vo ayega 
//favicon broswer khudse banata hai 


// URL 


// const http = require('http');
// const fs = require('fs');
// const url = require("url");

// const myServer = http.createServer((req, res) => {
//     if(req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.url} New Request Recieved\n`;
//     const myUrl = url.parse(req.url, true); //true mtlb muje query parameter strings ko bi parse krna h(ye krne se my name aur userId alg alg hojaega (parse))
//     console.log(myUrl);
    
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(myUrl.pathname){ //req.url ki jgh myUrl.pathname krne se eve if im passing query (http://localhost:9000/about?myname=krishna&userId=1) but pathname to vahi hai
//             case '/': res.end("HomePage");
//             break;

//             case '/about': 
//             const username = myUrl.query.myname;
//             res.end(`Hi, ${username}`); //yaha se myname ki value change krenge to page change hoga
//             // res.end("Welcome to the About page");
//             break;

//             case "/search":
//             const search = myUrl.query.search_query;
//             res.end("Here are your results for"+ search);
//             break;
//             //http://localhost:9000/search?search_query=Javascript+tic+tac+toe ye run krke dekhna

//             default: res.end("404 Not Found");
//         }
//     })
// });

// myServer.listen(9000, () => console.log('Server Started!'));

//http://localhost:9000/about?myname=krishna 404 not found dikhaegi but log m ajaega 
//http module req.url ko parese nahi krta mtlb ? ke baad aur pehle ka separate nahi krta 
//to do this we need to install url npm

//node modules ke and code hai iss library ka 
//protocol: null,
// slashes: null,
// auth: null,
// host: null,
// port: null,
// hostname: null,
// hash: null,
// search: '?myname=krishna',
// query: 'myname=krishna', query aur pathname ko parse(alg alg) krdiya 
// pathname: '/about',
// path: '/about?myname=krishna',
// href: '/about?myname=krishna'

// ye sb data mill jayega isse 



//REQUESTS




const http = require('http');
const fs = require('fs');
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Recieved\n`;
    const myUrl = url.parse(req.url, true); 
    
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){ 
            case '/': if(req.method === "GET") res.end("Home Page");
            break;

            case '/about': 
            const username = myUrl.query.myname;
            res.end(`Hi, ${username}`); 
            break;

            case "/search":
            const search = myUrl.query.search_query;
            res.end("Here are your results for"+ search);
            break;

            case '/signup':
            if(req.method === 'GET'){ 
                res.end("This is a SignUp form");
            }
            else if(req.method === 'POST'){
                //data ko database m daal denge
                res.end("Success")
            }
            
            default: res.end("404 Not Found");
        }
    })
});

myServer.listen(9000, () => console.log('Server Started!'));

//${req.method} krne se req ka method dikha dega (1737728189195: GET / New Request Recieved)
