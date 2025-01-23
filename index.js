const http = require('http');

const myServer = http.createServer((req, res) => {
    // console.log('New request recieved');
    console.log(req.headers); //headers ke andr extra information hoti hai request ki 
    
    res.end('Hello from Server');
    //if you make any change on the server, server ko restart krna pdega
})
//req object ke andr hmari sari info hogi ki kisne req ki, ip address kya hai, kya request hai vagera vagera and res se hum response send krenge

myServer.listen(8000, () => console.log('Server Started'));
//8000 ek port hai mtlb kis jagah hume apne server ko run krna hai 

// jab jab hum localhost:8000 server pe jayenge "new request recieved dikhayega"