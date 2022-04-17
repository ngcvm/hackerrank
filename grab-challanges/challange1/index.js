function solve(A) {
    // Write your code here
    // write your code in JavaScript (Node.js 8.9.4)
    if (!A.length || A.length > 100000) throw new Error ("N is an integer within the range [1, 100000].");
    const sortedArr = A.filter(x => x >= 1).sort((a, b) => a-b);
    if (!sortedArr.length) return 1;
    const distinctSet = new Set(sortedArr);
    let result;
    let expectedValue;
    for (let [key, value] of distinctSet.entries()) {
        if (value < -1000000 || value > 1000000) throw new Error ("Each element of array A is an integer within the range [-1,000,000..1,000,000].");
        
        if (expectedValue && value !== expectedValue) {
            result = expectedValue;
            break;
        }

        if (value - key === 0) {
            expectedValue = ++value;
        }
    }

    return result || expectedValue;
}
;(function main () {
    const t1 = [1, 3, 6, 4, 1, 2];
    const t2 = [-2, -1];
    const t3 = [1, 2, 3];
    console.log(solve(t1));
    console.log(solve(t2));
    console.log(solve(t3));
})();

