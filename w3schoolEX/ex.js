
// using a for loop, print 1 - 10

// wait for the DOM to get fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // save the #number list from the html document 
    let ul = document.querySelector('#number');

    // loop from 0 to 9
    for (i = 1; i <= 10; i++) {

        // create a list item to store result of each iteration
        let li = document.createElement('li');

        // append iteration results to list items
        li.append(i);

        // append list item to list
        ul.append(li);

        // console.log the bitch
        console.log(i)

    };

});