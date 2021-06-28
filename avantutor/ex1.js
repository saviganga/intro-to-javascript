// using a for loop, get the sum of two arrays

// define arr1, get its length and initiate its sum
let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let len_arr1 = arr1.length;
let sum1 = 0;

// define arr2, get its length and initiate its sum
let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let len_arr2 = arr2.length;
let sum2 = 0;

// find the sum of arr1
for (let i = 0; i < len_arr1; i++) {
    sum1 += arr1[i];
    console.log(`${i}. ${sum1}`);
};

// find the sum of arr2
for (let j = 0; j < len_arr2; j++) {
    sum2 += arr2[j];
    console.log(`${j}. ${sum2}`);
};

// find the sum of the two arrays
let total = sum1 + sum2;

// add event listener to update html
document.addEventListener('DOMContentLoaded', function() {

    let arr1List = document.querySelector('#arr-x');
    arr1List.innerHTML = arr1;

    let arr2List = document.querySelector('#arr-0');
    arr2List.innerHTML = arr2;

    // display the sum of array 1
    let arr1HTML = document.querySelector('#arr-1');
    arr1HTML.innerHTML = `sum of array 1: ${sum1}`;

    // display the sum of array 2
    let arr2HTML = document.querySelector('#arr-2');
    arr2HTML.innerHTML = `sum of array 2: ${sum2}`;

    // display the sum of arr1 and arr2
    let arrtotalHTML = document.querySelector('#arr-total');
    arrtotalHTML.innerHTML = `total sum of arrays: ${total}`;

});