/* 
    Promises are readability enhancers
    they are basically special js object which help us in control future task like downloading a data or read a file or use a timer
*/

// implement a set of dummy function to mimic the following functions
// download - mimic download some content from a url
// writeFile - mimic writing downloaded content to a file
// upload - mimic uploading file to a server
// now after writing function try use them where we first download a file, then write it to a disk then upload to a server

// function download( url, callback){
//     console.log(" started downloading from", url);
//     setTimeout(()=>{
//         console.log("Downloaded the content");
//         const content = "some content";
//         callback?.(content); // ?. -> this is optional chaining
//     }, 5);
// }

// function writeFile(file, content, callback){
//     console.log("started writing ",content,"to a file");
//     setTimeout(()=>{
//         console.log("File written successfully");
//         callback?.(file);
//     },5);
// }

// function upload(file, callback, url){
//     console.log("started uploading ");
//     setTimeout(()=>{
//         console.log(file," uploaded to ",url);
//         const status = "success";
//         callback?.(status);
//     },5)
// }

// // implementation using  callback
// function processFile(file){
//     download("abc.com", (content)=>{
//         writeFile(file, content, (file)=>{
//             upload(file, ()=>{
//                 console.log("process complete");
//             },"xyz.com")
//         })
//     })
// }

// processFile("file.txt");

//How to create a promise 
// in js we have a promise constructor
//new Promise(callback)
// this constructor expects a callback and here callback is called executor callback
// why called exe callback ? 
// because when we create a promise object at that point of time, our constructor execute this callback that means this callback is executed by the promise constructor immediately

/*
    how does this callback look like?
    new Promise((res, rej)=>{
        });

    - rest is resolver
    - rej is rejector
    both parameters are function
    - we are responsible for only giving definition of callback
    - calling it is Promise constructor duty
    as Promise constructor is responsible for executing executor callback it becomes the role of Promise constructor to execute  it
*/
const pr = new Promise((res, rej)=>{
    console.log("Executor callback triggered by Promise object");
})
console.log("Created the promise object");
console.log(pr);
// ***** Promise is native to js *************
//how does promise object look like
/**
 * it has many properties but main two are - Promise status & Promise value(promise result)
 * by default promise value is undefined
 * promise status -
 *      Pending - default state
 *      fulfilled - shows operation successfull
 *      rejected - show operation failed
 * operation refers to algo written inside exe callback
 * now promise object can change it's state only one time i.e either from pending to fulfilled or pending to rejected
 * state will change when -
 * if inside the exe cb we call the resolver () then : pending to fulfilled
 * if inside the exe cb we call the rejector () then : pending to rejected
 *  
*/

const pr1 = new Promise(function exec(res, rej){
    console.log("Executor callback triggered by Promise object");
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber % 2 === 0){
        res(randomNumber);
    }else{
        rej(randomNumber);
    }
});
console.log("Created the promise object");
console.log(pr1);

/**
 * 
 *      there are two arrays which promise obj maintains
 *      onRejection and onFulfillment initially they are empty
 * we can store somme () in both these arrays ?? how using .then() or .catch() available inside promise obj
 * these () remains in their respective arrays till the time promise is pending
 * if promise moves to fulfilled state all the () store in the onFulfillment moves to a brand new queue in memory called microtask queue & onRejected array does nothing
 * if promise goes to rejection state then all the () in onRejected array goes to microtask queue & onFulfillment does nothing
 */

//HOw to consume a Promise ?
/**
 *  promises act as a placeholder obj for something that will come in future
 *  once the future execution is done then we might want to some algo based on if the future is fail or success
 * to achieve this on the promise obj we have to use .then()
 * const pr = new Promise(exec);
 * pr.then(onFulfilled, onRejected)            --- here both onful.. and onRejec.. are functions however onRejected is optional they both sends () to their respective arrays ..... it is only used for registartion of these () and it doesn't execute them
 * 
 * micro task queue has higher priority then macro task priority
 */

// console.log("start");

// setTimeout(()=>{
//     console.log("Timer 1 done");
// }, 3000);

// const pr2 = new Promise(function exec(res, rej){
//     console.log("Executor callback triggered by Promise object");
//     setTimeout(()=>{
//         const randomNumber = Math.floor(Math.random()*100);
//         console.log(randomNumber);
//         if(randomNumber % 2 === 0){
//             res(randomNumber);
//         }else{
//             rej(randomNumber);
//         }
//     },4000);
// });

// pr2.then(function f(){ console.log("executing f")}, function g(){console.log("executing g")});
// pr2.then(function h(){ console.log("executing h")}, function i(){console.log("executing i")});

// for(let i = 0; i<1000000000;i++){}
// for(let i = 0; i<1000000000;i++){}

// console.log("end");

/**
 * 
 * newPr = pr.then(f, g)
 *  .then returns a brand new Promise obj which is diff from pr soo here newPr has a new Promise
 * now the question comes that how will this newPr will be resolved as it doesn't have any exe cb ?
 * responsibility of resolving newPr is of f
 * as soon as f executes upon resolving of pr and it returns the status of newPr changes to fulfilled and values sets to whatever f returns
 * if f returns an exception then newPr gets rejected
 * 
 */

function download(url){
    return new Promise(function exec(res, rej){
        console.log("Started downloading data from ",url);
        setTimeout(function(){
            let data = "Some data from" + url;
            console.log("Downloaded data from", url);
            res(data);
        },3000)
    });
}

function writeFile(data, fileName){
    return new Promise(function exec(res, rej){
        console.log("Writing", data , "to file");
        setTimeout(()=>{
            console.log("Writing to file", fileName, "is done");
            let status = "Success";
            res(status);
        },2000);
    });
}

function upload(fileName, url){
    return new Promise(function exec(res, rej){
        console.log("Uploading file ", fileName, " to ", url);
        setTimeout(()=>{
            console.log("Upload is done");
            let uploadStatus = "Success";
            res(uploadStatus);
        },3000);
    });
}

download("abc.com")
.then(function f(value){
    console.log("Downloaded value is", value);
    return  writeFile(value,"file.txt");
})
.then(function g(value){
    console.log("file written", value);
    return upload(value, "xyz.com");
})
.then(function  h(value){
    console.log("file uploaded", value);
});
