function jumpingOnClouds(c) {
    // Write your code here
    let total = 0;
    let lastStep = 0;
    let index = 0;

    while (index < c.length - 1) {
        if (c[index] === 0) {
            if (index+2 < c.length && c[index + 2] === 0) {
                index+=2;
                total++;
            } else if (index + 1 < c.length && c[index + 1] === 0) {
                total++;
                index++;
            } else {
                index++;
            }
        } else {
            index++;
        }
    }
    
    return total;
}

;(function main () {
    const steps = [0, 0, 1, 0, 0 ,1 ,0];
    const steps2 = [0, 0, 0, 1, 0, 0];
    const steps3 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];

    console.log(jumpingOnClouds(steps3));
})();