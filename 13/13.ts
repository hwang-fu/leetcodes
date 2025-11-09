function romanToInt(s: string): number {
    const tokens = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let ans = 0;
    for (const [symbol, value] of tokens) {
        while (s.startsWith(symbol)) {
            ans += value;
            s = s.slice(symbol.length);
        }
    }

    return ans;
};


const solve1 = romanToInt;

const solve2 = (s: string): number {
    const map = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = map.get(s[i])!;
        const next = map.get(s[i+1]) ?? 0;
        if (curr < next) {
            ans += (next - curr);
            i++;
        }
        else {
            ans += curr;
        }
    }
    return ans;
};

export {};
