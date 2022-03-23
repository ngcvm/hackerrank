function sockMerchant(n, ar) {
    // Write your code here
    if (n < 1 || n > 100 || !ar.length) return 0;
    let counterObj = {};
    for (let i = 0; i < n; i++) {
        const key = ar[i];
        if (typeof counterObj[key] === 'undefined') {
            counterObj[key] = 1;
        } else {
          counterObj[key]++;
        }
    }
    return Object.values(counterObj).reduce((total, count) => {
        return total + Math.floor(parseInt(count) / 2);
    }, 0);
}

;(function main () {
    const n = 7;
    const ar = [1,2,1,2,1,3,2];
    console.log(sockMerchant(7, ar));
})();



