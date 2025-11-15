function divide(dividend: number, divisor: number): number {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    const isNegative = (dividend < 0) !== (divisor < 0);

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let ans = 0;
    while (dvd >= dvs) {
        let temp = dvs;
        let mult = 1;
        while ((temp << 1) > 0 && (temp << 1) <= dvd) {
            temp = temp << 1;
            mult = mult << 1;
        }
        dvd -= temp;
        ans += mult;
    }

    if (isNegative) {
        ans = -ans;
    }
    if (ans < INT_MIN) return INT_MIN;
    if (ans > INT_MAX) return INT_MAX;
    return ans;
};

const divide1 = divide;

export {};
