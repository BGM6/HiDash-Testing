const { forEach } = require('./index');

let sum = 0;
forEach([1,2,3], (value) => {
    sum += value;
});

if (sum !== 6) {
    throw new Error('Expected sum of test array to equal to 6');
} else {
    console.log('The sum was as expected: ' + sum);
}
