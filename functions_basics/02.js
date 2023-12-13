// shopping cart problems
//based on number of parameters
/* 
   ... : Rest/spread operator
   helps to pass multiply parameters as rest operator

*/

function calculateCartPrice(...num1){
     let sum=0;
     for(let i of num1){
        sum+=i;
     }
     return sum;
} 

console.log(`THE VAULE OF ur CART IS ${calculateCartPrice(20,30,40,50,60,10,30,40,50,5,90,100,1000,10000)}`);


// passing an object
// point to note
/* 
 1. we need to pass the object as argument when we r making a function call
 2. give sensible name for the parameter
*/
const user ={
    name : "Rajan",
    phoneNumber : 3845793485439,
    "email id" : "hfhfeh@gmail.com"
}


function handleObj(any){
    console.log(`${any.name} , ${any.phoneNumber} , ${any["email id"]}`)

}

//handleObj(user);

//another way of doing it
//passing the object directly
handleObj({
    name : "shdf",
    phoneNumber : 8378383,
    "email id" : "shdfhssdj@gmail.com"
})

//passing an array

let array = [12,334,54,656,454]

let handleArray = function(showArray){
    for (let i of showArray){
        console.log(`${i}`)
    }
}

handleArray(array);