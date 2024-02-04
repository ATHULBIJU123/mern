numbers = [1, 2, 3, 4, 5];
doubledNumbers = numbers.map(number => number * 2);
console.log("doubledNumbers :",doubledNumbers);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("array of evenNumbers :",evenNumbers);

number = [1, 2, 3, 4, 5];
sum = number.reduce((s, redVAlue) => s + redVAlue, 0);
console.log(sum);

numbers = [5, 2, 9, 1, 7, 3];
max = numbers.reduce((r, currentNo) => {
    return Math.max(r, currentNo);
}, numbers[0]);
console.log(max);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenOrOdd = numbers.map(number => {
    if (number % 2 === 0) {
        return `${number} is even`;
    } else {
        return `${number} is odd`;
    }
});
console.log("string :",evenOrOdd);