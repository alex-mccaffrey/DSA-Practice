/*Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.*/

const countingSheep = (numSheeps) => {
    //Base Case
    if (numSheeps === 0) {
        console.log('All sheep jumped over the fence')
        return
    }

    //General Case
    console.log(numSheeps + ': Another sheep jumps over the fence')
    return countingSheep(numSheeps - 1)
}

countingSheep(10)




/*Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)*/

powerCalculator = (x, y) => {
    if (y < 0 ) {
        return console.log('exponent should be >= 0')
    }
    return console.log(Math.pow(x, y))
}

powerCalculator(4, 2)