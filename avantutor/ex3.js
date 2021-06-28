// Using a for loop output the elements in reverse order 

// get the array and its length
let arr = [43, 'what', 9, true, 'cannot', false, 'be', 3, true];
let arr_len = arr.length;
console.log(arr_len)

// add event listener
document.addEventListener('DOMContentLoaded', () => {

    // get the #reversed-array from the html document
    let ul = document.querySelector('#reversed-array')

    // loop through the array from the end
    for (let pointer = arr_len-1; pointer >= 0; pointer -= 1) {

        // create a new li
        let li = document.createElement('li')

        // add the elements in the array index
        li.append(arr[pointer])
        console.log(arr[pointer])

        ul.append(li)
    }


})
