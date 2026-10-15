let numbers = [3, 6, 9];

numbers.forEach(function(number, index) {
    numbers[index] = number + 2;
});

console.log(numbers);