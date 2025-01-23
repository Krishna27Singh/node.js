//pure code ko chote chote part m divide krdiya that is called modular programming

// function add(a, b){
//     return a+b;
// } 
//is function ko humne ek module m dala hai which is a custom module(math.js)
//how to import a module?

// const math = require('math') sirf ye krenge to built in modules m math module dhundega 
const math = require('./mathhh.js'); //./ mtlb current directory ke andr dhundhega module
//require #include ki trh hi hai 
// const math = require('http'); used for making Servers  

//console.log(math); //this gives an empty object until we export the func
// console.log(add(2,3));
//console.log(math(5,7));

console.log(math);

// console.log(math.addFn(4,5));
// console.log(math.subFn(4,5));


