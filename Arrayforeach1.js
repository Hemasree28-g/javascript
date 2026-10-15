let numbers = [10, 20, 30, 40];

numbers.forEach(function(number, index) {
    numbers[index] = number * 3;
});

console.log(numbers);