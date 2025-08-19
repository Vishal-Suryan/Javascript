// HOF - High Order Function
// Functions which expect another function as an argument is a HOF
// Callback - > the function which is being passed as argument in another function is know as a callback
const arr = [1,2,3];
arr.map(function f() {});
// map is HOF and f is a callback 
//why callback - we can decide what to send as implementation at runtime
/* 
    Callbacks Disadvantages -
    1) Callback Hell (minor disadvantage ) - it's a readability problem
    2) inversion of control  
*/
