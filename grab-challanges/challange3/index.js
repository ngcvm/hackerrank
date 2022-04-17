// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// O(n)
function calTotalFactoriesPolution (factories = []) {
    if (!factories.length) return 0;
    let sum = 0;
    for (let i = 0; i < factories.length; i++) {
        sum+= factories[i];
    }

    return sum;
}

// (O(n^2))
function solution(A = []) {
    if (!A.length) throw new Error("Please provide array of factories.");
    // write your code in JavaScript (Node.js 8.9.4)
    let totalPollutionNeedToBeReduced = calTotalFactoriesPolution(A) / 2;
    const sortedAInDes = A.sort((a, b) => b-a);

    let totalFilter = 0;
    for (let i = 0; i < sortedAInDes.length; i++) {
        if (totalPollutionNeedToBeReduced < 1) break;
        let reducedPollution = 0;
        if (i === (sortedAInDes.length - 1)) {
            reducedPollution += sortedAInDes[i] / 2;
            ++totalFilter;
        } else {
            while (reducedPollution < sortedAInDes[i + 1]) {
                reducedPollution += sortedAInDes[i] / 2;
                ++totalFilter;
            }
        }
        
        totalPollutionNeedToBeReduced -= reducedPollution;
    }

    return totalFilter;
}
;(function main () {
    const t0 = [5, 19, 8, 1];
    const t1 = [10, 10];
    const t2 = [3, 0, 5];
    const t4 = [120, 12, 33, 5342, 35];
    
    console.log(solution(t0));
    console.log(solution(t1));
    console.log(solution(t2));
    console.log(solution(t4));
})();

