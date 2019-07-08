const multiplier = {
    numbers: [1, 6],
    multiplyBy: 2,
    multiply() { 
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());