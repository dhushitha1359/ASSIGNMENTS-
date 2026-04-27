//1
function processTask(callback) {
    console.log("Task is processing...");
    callback(); // calling the callback
}

function taskCompleted() {
    console.log("Task completed!");
}

// function call
processTask(taskCompleted);

//2
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});

//3
myPromise
    .then(result => {
        console.log(result);   // if resolved
    })
    .catch(error => {
        console.log(error);    // if rejected
    });