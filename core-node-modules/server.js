// const os = require("os")

// const ab =  os.userInfo().username;
// // console.log(ab);
// // console.log(ab.username);


// const fs = require("fs");
// const path = require('path');

// const he  = path.resolve("ab");
// const fin = path.join(he,"c.txt");
// console.log(fin);

// fs.readFile("a.txt","utf-8",(error,data)=>{
//     if(error) console.log("error");
//     else{
//         console.log(data);
//     }
// })

// fs.readFile(fin,"utf-8",(error,data)=>{
//     if(error) console.log("error");
//     else{
//         console.log(data);
//     }
// })

// fs.appendFile("greetin.txt", `hi the user is ${ab} `+ '\n', ()=>{console.log('file is created');})

// console.log(fs);


//importing the export
const note = require("./notes.js")

// console.log(note);
// console.log(note.a);

let ans = note.vinit(2,2);
// console.log(ans);
//

const _ = require("lodash")

let data = ["vinit","vinit",1,1,2,"name","age"]
console.log(_.uniq(data)); // all unique values of array

console.log(_.isString(true));



