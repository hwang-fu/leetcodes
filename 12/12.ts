function intToRoman(num: number): string {
    let ans = "";

    const map = new Map<number, string>([
        [1000, "M"],
        [900,  "CM"],
        [500,  "D"],
        [400,  "CD"],
        [100,  "C"],
        [90,   "XC"],
        [50,   "L"],
        [40,   "XL"],
        [10,   "X"],
        [9,    "IX"],
        [5,    "V"],
        [4,    "IV"],
        [1,    "I"],
    ]);

    for (const [value, symbol] of map) {
        if (num === 0) {
            break;
        }
        const count = Math.floor(num / value);
        ans += symbol.repeat(count);
        num -= value * count;
    }

    return ans;
};

const solve1 = intToRoman;

export {};
