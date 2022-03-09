var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Head");
    }  else {
        console.log("Tail");
    }
} while (coinFlip === 0);
