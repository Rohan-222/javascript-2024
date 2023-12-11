// const googleUser = new Object()

// googleUser.id = "abc123";
// //googleUser.name = "Rahul";
// googleUser.isLoggedIn = false;
// googleUser.namefirstname = "kl";
// googleUser.name.lastname  = "sjdna";
// console.log(googleUser);

const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}

const obj2 = {
    4 : "d",
    5 : "e",
    6 : "f"
}

// object = Object.assign(Target,Source);
//const obj3  = Object.assign({}, obj1, obj2);

//console.log(obj3);

//using SpreadOPerator

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


//puts all the key values into array datatype
console.log(Object.keys(obj3));
//puts all the value into array datatype
console.log(Object.values(obj3));
//puts each property of the object into array datatype
console.log(Object.entries(obj3));
// to check a propety exists

console.log(obj3.hasOwnProperty("6"));
