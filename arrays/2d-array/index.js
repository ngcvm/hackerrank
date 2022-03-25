function hourglassSum(arr) {
    // Write your code here
    let sumGlassArr = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const total = getTotalAtRow(i, j, arr) + getTotalAtRow(i+2, j, arr) + arr[i+1][j+1];        sumGlassArr.push(total);  
        }
    }
    return sumGlassArr.reduce((max, o) => max > o ? max : o );
}

function getTotalAtRow(rowIndex, columnIndex, arr) {
    return arr[rowIndex][columnIndex] + arr[rowIndex][columnIndex + 1] + arr[rowIndex][columnIndex + 2];
}

;(function main () {
    const arr = [
        [-9, -9, -9, 1, 1, 1],
        [0, -9, 0, 4, 3, 2],
        [-9, -9, -9,  1, 2, 3],
        [0,  0,  8,  6, 6, 0],
        [0,  0,  0, -2, 0, 0],
        [0,  0,  1,  2, 4, 0],
    ]
    console.log(hourglassSum(arr));
})();

