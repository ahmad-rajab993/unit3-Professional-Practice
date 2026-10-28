import blabla, {firstName as fname} from './mymethods.js';
let names = ['ahmed', 'sara', 'mustafa']; // 3

for(let i=0; i<names.length; i++){
    // console.log(names[i]); // boundries
}





// const hpPrinter = ()=> {
//     console.log("i am hp printer");
//     console.log("ready to print");
// };

// console.log(printNames(hpPrinter,"manager"));

// const x = (y)=> console.log(y);

//  names.forEach(
//     (name)=>{
//         console.log("hello");
//         console.log(name);
//         console.log( "to our company");
        
//     }
//  ) ;

 const newNames = names.map((name)=>{
   return " " + name;
 })

//  newNames.forEach((name)=>{
//     console.log(`hello${name}`);
//  })

let numbers = [15,40,6,30,22];

// numbers.forEach((n)=>{
//    if(n<20){
//     console.log(n);
    
//    }

// });

const underTwenty = numbers.filter(
     (n)=>{ n<20;} 
);

const numbersAfterAddingFive = numbers.map( (n) =>{ return n+5})

// underTwenty.forEach( (n) => {console.log(n)});

// function mergeTexts(text1,text2){
//     return text1+ text2;
// }
// =>
// const mergeTexts = function(text1,text2){
//     return text1 + text2;
// }

// const mergeTexts = (text1,text2)=> { return text1+text2};

// const mergeTexts = (text1,text2)=> text1+text2;
// const printText = text =>  console.log(text);

// printNames( (text) => { console.log(text)} )

// blabla( ()=> console.log("names"," sdsd"))
console.log(fname);
