//basics again

// let add = (a,b)=>{
//     return a+b;
// }

// let add = (a,b) => a+b;

// let a = add(3,5)
// console.log(a);



// (function(){
//     console.log("vinit");
// })();

//Callback Function

function Callback(){
    console.log("vinit is calling a callback function");
}

const add = function(a,b,cb){
    console.log(`result of ${a} and ${b} is: `,a+b);
    cb();
}

// add(2,3,Callback);

// add(2,4,function(){
//     console.log("hey mister");
// })

add(3,3, () => console.log('ayyoo'));