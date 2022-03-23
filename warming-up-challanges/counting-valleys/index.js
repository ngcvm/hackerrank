

function countingValleys(steps, path) {
    // Write your code here
    if (steps < 2 || steps > Math.pow(10, 6)) return undefined;
    let currentFlag = 0;
    let currentStepCount = 0;
    let totalValleys = 0;
    for (let i = 0; i < steps; i++ ) {
        if (path[i] === 'D') {
            currentFlag = -1;
            currentStepCount--;
        } else {
            currentFlag = 1;
            currentStepCount++;
        }

        if (currentStepCount === 0 && currentFlag !== 0) {
            if (currentFlag === 1) {
                totalValleys++;
                currentStepCount = 0;
            }
        }
    }

    return totalValleys;
}

//             /\
// -    /\    /
//  \  /  \/\/
//   \/

;(function main() {
    const steps = 12;
    const path = "DDUUDDUDUUUD";
    
    console.log(countingValleys(steps, path));
})();



