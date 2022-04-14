function rotLeft(a, d) {
    // Write your code here
    let result = [];
    // First number after rotation.
    result.push(a[d]);
    // First half array before first number
    const firstHalfArr = a.slice(0, d);
    // Second half array after first number
    const secondHalfArr = a.slice(d + 1, a.length);
    result = [...result, ...secondHalfArr, ...firstHalfArr];
    return result;
}


;(function main () {
    const a = [1, 2, 3, 4, 5];
    const d = 4;
    const a2 = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
    const d2 = 10 
    console.log(rotLeft(a2, d2));
})();

