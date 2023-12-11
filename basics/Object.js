// singleton
//object.create
// object literals
const Jsckcnd = {
    "full name" : "sjabd",
    age : 18,
    email : "skfnns@gmail.com"
    
}

// ways of accessing objects
//console.log(Jsckcnd.full name);
//console.log(Jsckcnd["full name"]);
//console.log(Jsckcnd["email"]);

// changing the values / over writing them
Jsckcnd.email = "jdfbf@gmail.com";
//console.log(Jsckcnd.email);

//Object.freeze(Jsckcnd);

//Jsckcnd.email = "hfhsf@gmail.com";

//console.log(Jsckcnd);

Jsckcnd.greetings = function(){
    console.log("Hello JS USer");
}
console.log(Jsckcnd.greetings());

Jsckcnd.greetings2 = function(){
    console.log(`Hello ${Jsckcnd["full name"]} User`);
}
console.log(Jsckcnd.greetings2());