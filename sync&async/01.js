// sync -> do the task one by one 

/*
SYNC
ex:
1.task a - 5
2.task b - 12
3.task c - 15
4.task d - 1
a->b->c->d
waiting time => 0+5+17+32 =54s
*/


// async -> which tasks finishes first complete it first
// start together
/*
ASYNC
//how to know whether the code is ASYNC :-
if the code consits of following methods/concept then it is async
* SetTimeout()
* SetInterval()
* promises
* fetch()
* axios
* XMLHttpRequest()
*/
//we write async code 

// example
console.log("hfshdf");


// in this example if we want run a code after some time we need write setTimeout (function(){},time(ms))  but code in another line will get executed
setTimeout(function(){
    console.log("sfbhfbhsefb")
},3000);
console.log("hello"); // this line get executed first compared to settimeout method
console.log("shfhssf"); // this line get executed first
setTimeout(function(){
    console.log("LAST LINE");
},1000);



// in js to write async code we have
/*
* SetTimeout()
* SetInterval()
* promises
* fetch()
* axios
* XMLHttpRequest() 
*/

// to execute the data/information/code from the async code we have :-
// 1.callback
// 2.then&catch
// 3.await&async

