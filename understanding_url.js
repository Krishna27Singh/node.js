// URL --> Uniform Resource Locator
// example --> https://www.krishnasingh.dev/

// https:// --> This is called protocol (HyperText transfer Protocol Secure)
//              request and responses are encrypted
// http:// --> This is called protocol (HyperText transfer Protocol) This is not secure 
//             Less secure

//protocol ka mtlb hota h server ke sath kese communicate krna h (set of rules which tells the browser, how to communicate)

//www.krishnasingh.dev --> user friendly name of the IP address of the website (ek domain purchase krte h and uss domain ko uss ip ki trh point krva dete h)

// An IP address (Internet Protocol address) is a unique identifier assigned to every device connected to a computer network that uses the Internet Protocol for communication. It serves two primary purposes:

// Identification: Identifies the host or network interface.
// Location Addressing: Provides the location of 

//hum IP address check kr skte h kisi bi website ka by tuping ping (websiite name).com 
//142.250.193.46 for ex google ka ip address ye hai 

// '/' mtlb root path or home page.
//we can have different types of path for example www.krishnasingh.dev/about, www.krishnasingh.dev/contact
//www.krishnasingh.dev/about/1 --> This is called nested path
//we can tell the server how to respond for different different paths

//QUERY PARAMTER --> ye ek extra information hoti hai jo hum url ke sath pass kr skte h 

//example --> www.krishnasingh.dev/about?userId=5&life=shalini
//? ke baad jo bi ata hai vo query paramter hota (koi bi key value pair pass kr skte)
//url m space nahi de skte (space = +)

//EXAMPLE

// https://www.google.com/search?q=javascript+interview+questions&oq=javascript+inter&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDY4NTFqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8

// https:// --> This is the protocol
// www.google.com --> domain
// search -> path
// aage ka all is query paramter 
//q=javascript+interview+questions ko database m search krega and result render krke dedega

const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Recieved\n`;
    fs.appendFile("log2.txt", log, (err, data) => {
        switch(req.url){
            case '/': res.end("HomePage");
            break;

            case '/about': res.end("Welcome to the About page");
            break;

            default: res.end("404 Not Found");
        }
        //esa krne se / ke baad hum about ya kuch bi lagake uss page ko search kr skte and uske hisab se hume response milega
        //this is called a multi route (multipages)
    // res.end("Hello from Server");                 //jab log hojaega tbi user ko response send hoga
    })
});

myServer.listen(2000, () => console.log('Server Started!'));
//2 br isliye ari coz browser ek extra call krta hai 
//hum path bi de skte hai log file m (about) / ke baad jo bi likhenge vo ayega 
//favicon broswer khudse banata hai 
