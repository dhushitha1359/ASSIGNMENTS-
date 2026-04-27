function processOrder(callback) {
    console.log("Processing order...");
    callback();
}

function orderSuccess() {
    console.log("Order placed successfully!");
}

processOrder(orderSuccess);