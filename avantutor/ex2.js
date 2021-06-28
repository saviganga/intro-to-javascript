
// Using a for loop print all even numbers up to and including n. Don’t include 0.

// get a number fromthe user
num = parseInt(prompt('Enter a number: '));

// add event handler to the page
document.addEventListener('DOMContentLoaded', () => {

    if (num <= 1) {
        alert('none');
    };

    // get the #even-numbers array from the html
    let ul = document.querySelector('#even-numbers');

    // loop through the range of the number
    for (let pointer = 1; pointer <= num; pointer++) {

        // check if pointer is even
        if ((pointer % 2) != 0) {
            continue;
        };

        // list the even numbers
        let li = document.createElement('li');
        li.append(pointer);

        // add the even number to the #even-numbers array
        ul.append(li);

        console.log(li);

    };

});