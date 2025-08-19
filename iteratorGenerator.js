/**
 * Programming -
 * 1) imperative - we define everything manually all the logic
 * 2) declarative - we just define what has to be done eg sql
 * 
*/
function fetchNextElement(arr){
    let idx = 0;
    function next(){
        if(idx >= arr.length){
            return {value: undefined, done: true};
        }
        const newElement = arr[idx];
        idx++;
        return {value: newElement, done: false};
    }
    return {next};
}

const arr = [1,2,3,4,5];
const element = fetchNextElement(arr);
console.log(element.next());

/**
 * JS iterator -
 *  next - calls the next available result  {value :  , done : }
 *  value - it shows the next fetched value
 *  done - it is a boolean . False means there are more values in array and true when it reaches the last element
 */

// Generator Demo
function* myGenerator(){
    console.log("Inside generator");
    yield 100;
    yield 99;
    yield -1;
}
const i = myGenerator();
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
/**
 * to create a generator function we use function*
 * when we first call the generator function it does not run immediately rather it is in suspended state and in above eg i has a generator obj 
 * when we called i.next() it executes the generator function until the first yield and then pauses.
 */

function* gen(){
    console.log("inside generator");
    const x = yield 10; // 40
    const y = x + 20;
    yield y;
}

const it = gen();
console.log(it.next()); // {value : 10, done : false}
console.log(it.next()); // {value : Nan, done : true} -> but if i does console.log(it.next(40)); then insode gen as the [rev yield was at line 48 it sets 40 there and moves to next and set y as 60 and finally executes the yield and outputs {value : 60, done : true}
// return statement is not expected in generator () and if you write a  return statement in gen() then it is treated as last yield() and any other line of code after that is treated as dead code