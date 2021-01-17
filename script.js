function manipulateNumbers(numbers) {
    if (!numbers || !Array.isArray(numbers) || numbers.length < 3) {
        return null;
    }

    const response = numbers.concat();
    const firstNumber = response.slice(0, 1);
    const lastNumber = response.slice(-1);
    const middleNumber = response.slice(1, -1);

    return [...lastNumber, ...middleNumber, ...firstNumber];
}

module.exports = manipulateNumbers;