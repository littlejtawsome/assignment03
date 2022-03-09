//Validate Repeat Entry in Lab 5 (Extra Credit 5 points)

//There’s a line of code in lab 5 that asks the user if they want to repeat their entry. The code resembled the image outlined below.  

//Your job in this part of the assignment is to validate that entry. If it’s anything other than “y” or “n”, the prompt should simply reappear until the user enters a valid entry. 

//Global variables
let miles
let gallons
let mpg
let again = `y`


do {
    miles = parseFloat(prompt(`Enter miles driven`))
    gallons = parseFloat(prompt(`Enter miles gallons`))
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
    } else {
        alert(`One of both of your entries are invalid.`)
    }
    again = prompt(`Do you want to run the application again? (y or n)`)
} while (again !== `n`)

console.log(`The application has exited.`)

     