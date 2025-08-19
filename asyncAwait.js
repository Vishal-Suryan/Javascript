// function download(url){
//     return new Promise(function exec(res, rej){
//         console.log("Started downloading data from ",url);
//         setTimeout(function(){
//             let data = "Some data from" + url;
//             console.log("Downloaded data from", url);
//             res(data);
//         },3000)
//     });
// }

// function writeFile(data, fileName){
//     return new Promise(function exec(res, rej){
//         console.log("Writing", data , "to file");
//         setTimeout(()=>{
//             console.log("Writing to file", fileName, "is done");
//             let status = "Success";
//             res(status);
//         },2000);
//     });
// }

// function upload(fileName, url){
//     return new Promise(function exec(res, rej){
//         console.log("Uploading file ", fileName, " to ", url);
//         setTimeout(()=>{
//             console.log("Upload is done");
//             let uploadStatus = "Success";
//             res(uploadStatus);
//         },3000);
//     });
// }

// function* exec(){
//     const downloadedData = yield download("abc.com");
//     console.log("Data downloaded is", downloadedData);
//     const fileResponse = yield writeFile(downloadedData, "example.txt");
//     console.log("File write status", fileResponse);
//     const uploadStatus = yield upload("example.txt", "a+xyz.com");
//     console.log("Upload status", uploadStatus);

//     return uploadStatus;
// }

// const it = exec(); // exec () will return us an gen obj having an itr
// ft = it.next();
// console.log("ft is", ft);
// ft.value.then(function doAfterReceiving(value){
//     console.log("Calling do after receiving is finished", value);
//     const future = it.next(value);
//     if(future.done) return;
//     future.value.then(doAfterReceiving);
// })

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

async function exec(){
    const downloadedData = await download("abc.com");
    console.log("Data downloaded is", downloadedData);
    const fileResponse = await writeFile(downloadedData, "example.txt");
    console.log("File write status", fileResponse);
    const uploadStatus = await upload("example.txt", "a+xyz.com");
    console.log("Upload status", uploadStatus);

    return uploadStatus;
}
exec(); // exec () will return us an gen obj having an itr

// Async function
/**
 *  -we will be able to use await keyword
 *  -async function will always return a promise
 *  -if we have an async () returning a non promise value like obj number string null etc then async () will create a brand new promise in the memory and then immediately fulfill the promise using the returned value and hence u get an already fulfilled promise
 *  -but if we return a normal promise obj then whatever if the flow of that promise will work
 *  -whenever we hit await keyword in the async () we immediately exit
 *  -so when we will go back?
 *  we only await on a promise obj whenever that promise is fulfilled or rejected then if the main thread is empty then we re-enter the async () at the same place where we exitted with the resolved/rej value of a promise
 *  - async () internally uses itr-gen concepts but they do not need to be normally controlled by you .JS handles everything hence unlike gen ()'s when we call async () execution starts immediately
 * 
 */