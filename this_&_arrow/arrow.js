const user ={
    username : "sghfv",
    price : 232,

    welcomeMessage: function(){
        console.log(`${user.username}, welcome to webiste`);
        console.log(this);
    }
}


/* 
SYNTAX --------

const/let var_name = () => {
    function definition
}
SYNTAX --------
*/

// arrow functions vs functions
/*










*/
//first way
const fun = (num1,num2) => {
    return num1 + num2;
}

//console.log(fun(12,34));

//second way
//            parameters    (return values)
const fun2 = (num1,num2) => (num1,num2);

//console.log(fun2(12,56));


// returning objects

const fun3 = () => ({username: "histesh"})

fun

