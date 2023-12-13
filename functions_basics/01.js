// n1 and n2 are parameters
function addNumbers(n1,n2){
    console.log(n1+n2);
}

// here 2,3 are arguments
console.log(addNumbers(2,3));


//another way of writing functions
// Function Expression
let addd = function(n1,n2){
    return (n1+n2);
    //****** invalid********
    //sdfgfgg we should not write any thing after the return satement in the function
}

addd(2,4);


/*
*********BEST PRACTISE USE *******
* always use `` for taking values of variables from functions
* undefined , "" is false in js

*/