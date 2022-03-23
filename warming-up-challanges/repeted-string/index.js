function repeatedString(s, n) {
    // Write your code here
    if (!s || !n) return undefined;
    let total = 0;
    const totalAInStr = getTotalCharacterAOfStr(s);
    if (totalAInStr < 1) {
        return 0;
    }

    const totalRepeatTimes = Math.floor(n / s.length);
    total += totalAInStr * totalRepeatTimes;
    const remainsStrLength = n - (totalRepeatTimes * s.length);

    if (remainsStrLength < 1) {
        return total;
    }

    const totalAInRemainStr = getTotalCharacterAOfStr(s.slice(0, remainsStrLength) || '');
    total += totalAInRemainStr;
    return total;
}

function getTotalCharacterAOfStr (s) {
    if (!s) return undefined;

    return (s.match(/a/g) || []).length;
}

;(function main () {
    const n = 10;
    const n2 = 1000000000000;
    const s2 = 'a';
    const s = 'aba';
    const s3 = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
    const n3 = 736778906400; // => assert(51574523448)
    const n4 = 8177;
    const s4 = 'ceebbcb';
    const s5 = 'gfcaaaecbg';
    const n5 = 547602

    console.log(repeatedString(s2, n2));
})();