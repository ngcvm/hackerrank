function solve(executedTasks) {
    // Write your code here
    let result = [];
    for (let j = 0; j < executedTasks.length; j++) {
        if (j == 0) {
            result.push(0);
            continue;
        }
        let isEqualCurrentIndex = true;
        for (let k = Math.max(0, j - 1); k < j; k++) {
          if (executedTasks[k] > executedTasks[j]) isEqualCurrentIndex = false;
        }
        result.push(isEqualCurrentIndex ? j : -1);
    }
    return result;
}
;(function main () {
    const t0 = [0, 2, 1, 3];
    const t2 = [0, 1, 2, 3];
    const t3 = [3, 2, 1, 0];
    const t4 = [2, 0, 3, 1, 5, 4];
    console.log(solve(t0));
    console.log(solve(t2));
    console.log(solve(t3));
    console.log(solve(t4));
})();

