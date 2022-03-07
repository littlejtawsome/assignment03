//The “Coin Flip” Game Redux
//step1.
var coinFlip;
let amountGame = parseInt(prompt("How many game you try? choose 1 to 5"));
//step2.
if (amountGame < 1 || amountGame > 5) {
    alert(" You have to type the proper number between 1-5 again!");
} else {
    for (i = 0; i < amountGame; i++) {
        coinFlip =  Math.round(Math.random());
        var result;
        if (coinFlip  === 0) {
            result = "Head";
        
        } else if (coinFlip  === 1) {
            result = "Tail"; 
        } 
        console.log( result )


    }
}
