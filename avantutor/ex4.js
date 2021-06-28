/* Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length. */

// define arrays and get length
let arr_1 = [4, 6, 7];
let arr_2 = [8, 1, 9];
let len_arrs = arr_1.length;

// initialize sum
sum = 0;

s = [];

// loop
for (let pointer = 0; pointer < len_arrs; pointer++) {

    // sum numbers at the index
    sum = arr_1[pointer] + arr_2[pointer];
    s.push(sum);
    console.log(s);
    
};

// add eventListener
document.addEventListener('DOMContentLoaded', () => {
    let arr_1HTML = document.querySelector('#arr-1');
    arr_1HTML.innerHTML = arr_1;

    let arr_2HTML = document.querySelector('#arr-2');
    arr_2HTML.innerHTML = arr_2;

    let total_HTML = document.querySelector('#arr-total');
    total_HTML.innerHTML = s;
});