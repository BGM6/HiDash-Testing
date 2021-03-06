const assert = require('assert');
const {forEach, map} = require('./index');

// const test = (desc, fn) => {
//     console.log('-----', desc);
//     try {
//         fn();
//     } catch (e) {
//         console.log(e.message);
//     }
// };

 it('The forEach function', () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    });

    assert.strictEqual(sum, 6);

    if (sum !== 6) {
        throw new Error('Error: Expected sum of test array to equal to 6');
    }

});

//===========================================================================

it('The map function', () => {
    const result = map([1, 2, 3], value => {
        return value * 2;
    });
    assert.strictEqual(result[0], 2);
    assert.strictEqual(result[1], 4);
    assert.strictEqual(result[2], 6);
//result === [2, 4, 6];
});

