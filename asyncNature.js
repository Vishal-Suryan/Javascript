/*
    - only the things which are native to JS are synchronous in nature 
    - other things which are not native to JS show async nature eg things given to JS by runtime environment (eg nodejs , browser , bunjs)
    
*/
function createTimer(time, timerID){
    console.log("creating timer with id", timerID);
    setTimeout(()=>{
        console.log(`Timer with ${timerID} is done`);
    },time);
    console.log("successfully created a new timer with id", timerID);
}
console.log("starting the code");
createTimer(2000,1);
createTimer(0,2);
console.log("starting a loop");
for(let i = 0; i<1000000000; i++){
    // do
}
console.group("Loop is done");
console.log("last line of code is done");
/* 
    now how is the callback in setTimeout is able to access a local variable timerID when the function createTimer is already finished in callStack (createTimer function came in call stack sent the signal to runtime environment for setTimeout and proceeded to next line after this it gets removed from call stack)  ans -> closure
    what are closure?
    it is a mechanism using which a function remembers the variable present in the outer function scope even when the outer function execution is completed
*/