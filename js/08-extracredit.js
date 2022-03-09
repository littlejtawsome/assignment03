// Validate Numeric Entries in Lab 6 (Extra Credit 5 points)
// There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years they would like to invest for. The code resembled the image outlined below.  
// Your job in this part of the assignment is to validate those entries. Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.

// Global Variables
let futureValue
let investment
let rate
let years

//collect values from the user
investment = parseFloat(prompt('How much do you want to invest?'));
 do {
    rate = parseFloat(prompt('Enter interest rate as xx.x% between 1 - 6 % '));

} while (rate < 0 || rate > 6) ;
   
 do { 
    years = parseInt(prompt('How many years do you want to invest for'))
} while (1 > years || years > 30);
    


//perform calculations
futureValue = investment
for (let i = 0; i < years; i++) {
     futureValue = futureValue + (futureValue * rate / 100)
}

//Display results

document.write(`Original investment amount : ${investment.toFixed(2)}<br>`)
document.write(`Interest rate : ${rate}<br>`)
document.write(`Years : ${years.toFixed(2)}<br>`)
document.write(`Investment future value : ${futureValue.toFixed(2)}<br>`)


