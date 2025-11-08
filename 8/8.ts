function myAtoi(s: string): number {
    const isDigit = (c: string) => {
        return ('0'.charCodeAt(0) <= c.charCodeAt(0)) && (c.charCodeAt(0) <= '9'.charCodeAt(0));
    }

    const LIMIt_LOW  = - (Math.pow(2, 31));
    const LIMIt_HIGH = (Math.pow(2, 31) - 1);

    s = s.trim();

    const signed = s[0] === '-';
    if (s[0] === '-' || s[0] === '+') {
        s = s.slice(1);
    }

    let ans = 0;
    for (const c of s) {
        if (!isDigit(c)) {
            break;
        }

        ans *= 10;
        ans += (c.charCodeAt(0) - '0'.charCodeAt(0));
    }

    ans = signed ? -ans : ans;

    if (ans < LIMIt_LOW) {
        return LIMIt_LOW;
    }
    else if (ans > LIMIt_HIGH) {
        return LIMIt_HIGH;
    }
    else {
        return ans;
    }
};

const solve = myAtoi;

export {};
