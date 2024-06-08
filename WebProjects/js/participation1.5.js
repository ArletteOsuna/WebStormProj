function update(array) {
    let numbersLen = array.length;
    let i = 0;
    while (i < numbersLen) {
        if (array[i] % 2 !== 0) {
            array[i] = array[i] * 2;
        }
        i += 1
    }
    return array;
}

let numbers = [4, 9, 7, 2, 1, 8];
console.log(`The original array is [${numbers}]`);
console.log(`The updated array is [${update(numbers)}]`);