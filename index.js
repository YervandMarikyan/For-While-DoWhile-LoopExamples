"use strict";

// Ստեղծում եք 5 հատ For loop, 5 հատ while loop, 1 հատ էլ do whille loop, 
// ամեն լուփի մեջ տարբեր բաներ եք անում, կրկնվող բան չպետք ա լինի

const array = [11, 22, 33, 44, 55];

//for loop
//1
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("------------------");

//2
for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
console.log("------------------");

//3
for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        console.log(`The number ${array[i]} id even`);
    } else {
        console.log(`The number ${array[i]} id odd`);
    }
}
console.log("------------------");

//4
const newArray = [];
let index = 0;
for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
        newArray[index] = array[i];
        index++;
    }
}
console.log(newArray);
console.log("------------------");

//5
let sum = 0;
let average = 0;
for(let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
average = sum / array.length;
console.log(average);
console.log("------------------");

//while loop
//1
let i = 0;
let str = "Hello World";
while(i < str.length) {
    console.log(str[i]);
    i++;
}
console.log("------------------");

//2
let x = 0;
let letters = ["A", "B", "C", "D", "E", "F"];
while(x < letters.length) {
    console.log(letters[x]);
    x++;
}
console.log("------------------");

//3
let x1 = 0;
let count = 0;
let letters1 = ["A", "B", "C", "D", "E", "F"];
let letters2 = ["A", "K", "C", "P", "E", "Z"];
while(x1 < letters1.length) {
    if(letters1[x1] === letters2[x1]) {
        count++
    }
    x1++;
}
console.log(count);
console.log("------------------");

//4
let ind = 0;
let nums1 = [4, 77, 5, 9, 2, 44, 23];
let nums2 = [5, 12, 78, 24, 6, 10, 1];
let maxNums = [];
while(ind < nums1.length) {
        
    if(nums1[ind] > nums2[ind]) {
        maxNums[ind] = nums1[ind];
    } else {
        maxNums[ind] = nums2[ind];
    }
    ind++;
}
console.log(maxNums);
console.log("------------------");

//5
let arr = [25, "name", 41, 15, "age", "lastName", 1];
let numArr = [];
let stringArr = [];
let s = 0;
let n = 0;
let y = 0;
while(y < arr.length) {
    if(typeof(arr[y]) === "string") {
        stringArr[s] = arr[y];
        s++;
    }    
    if(typeof(arr[y]) === "number") {
        numArr[n] = arr[y];
        n++;
    }  
    y++;
}
console.log(numArr);
console.log(stringArr);
console.log("------------------");

//do while loop
//1
let b = 0;
do {
    console.log("Hi");
    b++;
} while(b < 1);



