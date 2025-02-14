
let fruits = ['apple', 'banana', 'orange'];
let moreFruits = ['grape', 'mango', 'pear'];


let allFruits = fruits.concat(moreFruits);
console.log("After concat:", allFruits);

let slicedFruits = allFruits.slice(2, 4);
console.log("After slice:", slicedFruits);


allFruits.splice(1,2, 'kiwi', 'watermelon');
console.log("After splice:", allFruits);

allFruits.sort();
console.log("after sort:",allFruits);
allFruits.reverse();
console.log("after revers:",allFruits);
let a=allFruits.map(w=> w =="watermelon");
console.log(a);
let b=allFruits.filter(w=> w=="kiwi");
console.log(b);


















let g=[20,30,40,50,60];

let c=g.map(y=> y+3 );
console.log("add",c);
let s=g.map(y=> y-5 );
console.log("sub",s);
let t=g.map(y=> y*5 );
console.log("multiplication",t);
let j=g.map(y=> y/5 );
console.log("division",j);
let l=g.map(y=> y%6 );
console.log("modules",l);