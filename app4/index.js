function findOdd(start, end) {
    let oddNums = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) { // Check if the number is odd
            oddNums.push(i);
        }
    }
    return oddNums; // Return the array after the loop completes
}

export { findOdd };
