function rotLeft(a, d) {
    // Write your code here
    const returnArr = [];
    const arrLength = a.length;
    for (let i = 0; i < arrLength; i++) {
        let afterRotationIndex = d;
        if ((i + d) > (arrLength - 1)) {
            afterRotationIndex = (i + d) - arrLength;
        }
        returnArr[i] = a[afterRotationIndex];
    }
    return returnArr;
}


;(function main () {
    const a = [1, 2, 3, 4, 5];
    const d = 4;
    const a2 = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
    const d2 = 10 
    console.log(rotLeft(a2, d2));
})();

