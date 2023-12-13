const user ={
    username : "sghfv",
    price : 232,

    welcomeMessage: function(){
        console.log(`${user.username}, welcome to webiste`);
        console.log(this);
    }
}
user.welcomeMessage();
//console.log(user.welcomeMessage());
user.username = "yehwfru";
//console.log(user.welcomeMessage());
user.welcomeMessage();
console.log(this);


function chai(){
    let name = "sfbje";
    console.log(this.name); // gives undefined
}
//chai();